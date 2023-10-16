import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase'; // Import your Firebase authentication object


function Homepage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      // Firebase listener to check if the user is authenticated
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          // User is signed in
          setUser(authUser);
        } else {
          // No user is signed in
          setUser(null);
        }
      });
  
      // Clean up the listener when the component unmounts
      return () => {
        unsubscribe();
      };
    }, []);
  
    return (
      <div >
         
    
   
          <div class="sticky top-0 flex h-screen items-center justify-center">
    <img src="https://raw.githubusercontent.com/anngithub1234/images/main/imgmad/logo.webp" class="h-full w-full object-cover" />
    <div class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
      <h2 class="text-2xl font-bold">BayMax</h2>
      <p class="font-sans text-lg text-white">The innovative fintech app, is revolutionizing the way we manage our finances. With its user-friendly interface and cutting-edge features</p>
      {user ? (
          // If the user is signed in, display the "Signin" link
          <>
            <p className="text-white">Logged in as: {user.email}</p>
          <Link to="/wallet">
            <h3>Ready to check your wallet</h3>
          </Link>
          </>
         
        ) : (
          // If the user is not signed in, display a message to sign up
          <>
          <Link to="/login">
            <h3>Sign in</h3>
          </Link>
          </>
        )}
    </div>
  </div>
        
        {/*user ? (
          // If the user is signed in, display the "Signin" link
          <>
          <Link to="/wallet">
            <h3>Ready to check your wallet</h3>
          </Link>
          </>
         
        ) : (
          // If the user is not signed in, display a message to sign up
          <>
          <Link to="/login">
            <h3>Sign in</h3>
          </Link>
          </>
        )*/}
      </div>
    );
  }

export default Homepage