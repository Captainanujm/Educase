import React from "react";
import {useNavigate} from "react-router-dom"
const Home = () => {
    const navigate=useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-center">
     
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to PopX</h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum inventore sint modi.
        </p>

     
        <div className="flex flex-col gap-4 w-full">
          <button onClick={()=>navigate("/signup")} className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
            Create Account
          </button>
          <button onClick={()=>navigate("/login")} className="w-full bg-purple-200 text-purple-800 py-3 rounded-lg font-semibold hover:bg-purple-300 transition">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
