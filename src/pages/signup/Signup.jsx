import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setErr(false); // Reset error state
  
      const displayName = e.target.name.value; // Use the name attribute
      const email = e.target.email.value;
      const password = e.target.password.value;
      const file = e.target.file.files[0]; // Use the name attribute
  
      try {
        // Create user
        const res = await createUserWithEmailAndPassword(auth, email, password);
  
        // Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${displayName + date}`);
  
        await uploadBytesResumable(storageRef, file).then(async () => {
          const downloadURL = await getDownloadURL(storageRef);
          try {
            // Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            // Create user on Firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
  
            // Create empty user chats on Firestore
            await setDoc(doc(db, 'userChats', res.user.uid), {});
            setLoading(false); // Reset loading state
            navigate('/');
          } catch (err) {
            console.error(err);
            setErr(true);
            setLoading(false); // Reset loading state
          }
        });
      } catch (err) {
        console.error(err);
        setErr(true);
        setLoading(false); // Reset loading state
      }
    };
  
    return (
      <div>
        <section class="bg-green-100 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
  <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-26 h-14 " src="https://raw.githubusercontent.com/anngithub1234/images/main/imgmad/navlog.webp" alt="logo"/>
          BayMax    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" >

              <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>

              <div>
                      <label for="file" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
                      <input type="file" name="file" id="file" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 
                  <button type="submit" class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sumbit</button>
                  {loading && 'Uploading and compressing the image, please wait...'}
                  {err && <span>Something went wrong</span>}
                 
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account yet? <Link to="/login"  class="font-medium text-green-600 hover:underline dark:text-primary-500">Login</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
       {/* <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="name" />
          <input type="file" name="file" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit">submit</button>
          {loading && 'Uploading and compressing the image, please wait...'}
    {err && <span>Something went wrong</span>}
    </form>*/}
      </div>
    );
  }

export default Signup