import React,{useEffect, useState} from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate=useNavigate();
    const [isAgency,setIsAgency]=useState("");
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        phone_number:"",
        company_name:"",
})
async function handleSubmit(e){
  e.preventDefault();
  try{
    const res=await axios.post("http://localhost:3000/signup",formData);
  alert(res.data.message);
  setFormData({ name:"",
    email:"",
    password:"",
    phone_number:"",
    company_name:"",});
    navigate("/login")
  
  }catch(error){
    console.log(error)
  }
  
}
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-700">Create your POPX Account</h1>

        <form className="flex flex-col gap-4">
         
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input onChange={(e)=>{
                setFormData({...formData,[e.target.name]:e.target.value,})
            }}
            name="name"
              type="text"
              placeholder="Enter your full name"
              required
              value={formData.name}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

        
          <div>
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="number"
               name="phone_number"
               onChange={(e)=>{
                setFormData({...formData,[e.target.name]:e.target.value,})
            }}
              placeholder="Enter your phone number"
              value={formData.phone_number}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

         
          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e)=>{
                setFormData({...formData,[e.target.name]:e.target.value,})
            }}
               name="email"
              placeholder="Enter your email"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

         
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              value={formData.password}
               name="password"
               onChange={(e)=>{
                setFormData({...formData,[e.target.name]:e.target.value,})
            }}
              placeholder="Enter your password"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>


          <div>
            <label className="block text-gray-700 font-medium">Company Name</label>
            <input
              type="text"
               name="company_name"
              value={formData.company_name}
              onChange={(e)=>{
                setFormData({...formData,[e.target.name]:e.target.value,})
            }}
              placeholder="Enter your company name"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
          <label className="block text-gray-700 font-medium mb-2">Are you an agency?</label>
          <div className="flex gap-6">
            
            <label className="flex items-center">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={isAgency === "yes"}
                onChange={(e) => setIsAgency(e.target.value)}
                className="mr-2"
              />
              Yes
            </label>

            
            <label className="flex items-center">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={isAgency === "no"}
                onChange={(e) => setIsAgency(e.target.value)}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
         
          <button onClick={handleSubmit}
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition"
          >
            Sign Up
          </button>
         
        </form>
      </div>
    </div>
  );
};

export default Signup;
