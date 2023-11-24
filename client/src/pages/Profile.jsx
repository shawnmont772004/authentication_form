import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import {useRef} from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase.js';
function Profile() {

  const {currentUser} = useSelector((state) => state.user)
  const fileRef = useRef(null);
  const [image,setImage] = useState();
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  console.log(image);

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };
  return (
    <>
     <div className="min-h-screen flex justify-center items-center">
      <div className={`p-12 border flex flex-col bg-white md:w-96 sm:w-1/3 w-96 rounded-lg shadow-lg transition-width duration-300`}>
        <input type="file" ref={fileRef} hidden onChange={(e)=>setImage(e.target.files[0])}/>
        <h1 className="text-2xl p-2 font-semibold mx-auto border-b-2   border-black ">Profile</h1>
        <img src={formData.profilePicture || currentUser.profilePic} alt="profile" className="mt-4 w-24 h-24 rounded-full mx-auto"  onClick={() => fileRef.current.click()} accept='image/*' />
        <p className='text-sm self-center'>
          {imageError ? (
            <span className='text-red-700'>Error uploading image (file size must be less than 2 MB)</span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span className='text-slate-700'>{`Uploading: ${imagePercent} %`}</span>
          ) : imagePercent === 100 ? (
            <span className='text-green-700'>Image uploaded successfully</span>
          ) : (
            ''
          )}
        </p>
        <form className="flex flex-col gap-4 mt-6">
          <input defaultValue={currentUser.userName} type="text" placeholder="username" className="p-2 border rounded-md border-1 border-gray-400 text-black hover:border-green-400 focus:outline-green-500" />
          <input defaultValue={currentUser.email} type="text" placeholder="email" className="p-2 border rounded-md border-1 border-gray-400 text-black hover:border-green-400 focus:outline-green-500" />
          <input type="password" placeholder="password"  className="p-2 border rounded-md border-1 border-gray-400 text-black hover:border-green-400 focus:outline-green-500" />
          <button type="submit" className="text-white font-semibold text-sm bg-green-500 p-2 rounded-md border border-gray-300 hover:opacity-60">UPDATE</button>
        </form>
        <div className="flex justify-between mt-2 text-green-700">
          <span>Delete account?</span>
          <span className="underline">sign out</span>
        </div>
      </div>
    </div>
    </>
     
    )
}

export default Profile