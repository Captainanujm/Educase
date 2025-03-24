import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Login = () => {
 const [formData,setFormData]=useState({email:"",password:""});
const navigate=useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const res=await axios.post("http://localhost:3000/login",formData);
      alert(res.data.message);
      localStorage.setItem("token",res.data.token)
      setFormData({email:"",password:""});
      navigate("/profile");
    }catch(error){
      console.log(error);
    }
    


  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-700">Login</h1>

        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e)=>
                setFormData({...formData,[e.target.name]:e.target.value})
              }
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

         
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e)=>
                setFormData({...formData,[e.target.name]:e.target.value})
              }
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

         
          <button onClick={handleLogin}
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
