import React from 'react';
import Navbar from '../../components/navbar/Navbar';


const OfflineLoginFallback = () => {
  return (
   <>
   <Navbar />
   <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-18 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl text-center mt-14">
                                LOOKS LIKE YOU ARE NOT CONNECTED TO THE INTERNET <br></br>
                                
                            </h1>
                            <p className="my-2  mt-6 text-gray-800 text-center">Sorry about that! Please visit our hompage or reconnect to internet and try again.</p>
                            
                        <div className='flex justify-center items-center mt-20'>
                        <a href="/">
                        <button className="sm:w-full lg:w-auto my-2 border rounded-2xl md py-4 px-8 text-center bg-green-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                            Take me home!</button>
                        
                        </a>
                        </div>    
                        
                        </div>
                    </div>
                   
                </div>
            </div>
            {/* <div className='flex justify-center items-center  mt-8 font-body '>
              <h1 className='my-2 text-gray-800 font-bold text-2xl text-center'>
                PLEASE CONNECT TO THE INTERNET TO CONTINUE !!!
              </h1>
            </div>  */}
        </div>
   </>
  );
};

export default OfflineLoginFallback;