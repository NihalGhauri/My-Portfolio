
import React from "react";
import Link from "next/link"

const page = () => {
    return (

        <div className="flex items-center justify-center h-screen bg-black ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-400">404</h1>
        <p className="mt-2 text-xl text-gray-400">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="mt-4 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
           
            Go Back Home
          
        </Link>
      </div>
            </div>
            
  );
};


export default page;
