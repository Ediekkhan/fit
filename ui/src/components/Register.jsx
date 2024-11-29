import React, { useState } from 'react';
import apiRequest from '../lib/utils/apiRequest';        //  apiRequest carry the axios method in lib folder
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username:'',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] =useState('')
  const [isloading, setisloading] =useState(false)
  

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    setisloading(true)
    const formData = new FormData(e.target)

    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    
    
    try {
      const res = await apiRequest.post("/auth/register",{
        firstName , lastName,username, email, password
      })

      navigate('/login')

      console.log(res.data);

    } catch (error) {
      console.log(error) 
      setError(error.response.data.message);
    }finally{
      setisloading(false);
    }
  }; 

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl text-center font-bold mb-4">Register</h2> 
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='Enter first Name' required className="mt-1 p-2  border block w-full  rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Enter last Name' required className="mt-1 p-2  border block w-full  rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name</label>
          <input type="text" id="userName" name="username" value={formData.username} onChange={handleChange} placeholder='Enter Username' required className="mt-1 p-2  border block w-full  rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter email' required className="mt-1 p-2  border block w-full  rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter Password' required className="mt-1 p-2  border block w-full  rounded-md" />
        </div>
        {/* <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm Password' required className="mt-1 p-2  border block w-full  rounded-md" />
        </div> */}
        <button type="submit" disabled={isloading} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Register</button> <br />
        {error && <span> {error}</span> }
      </form>
    </div>
  );
}

export default Register; 