import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'

export default function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
       
        if (formData.name === '' || formData.email === '' || formData.password === '') {
          setError('Please fill in all fields');
          return;
        }
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.email === formData.email);
        if (existingUser) {
          setError('User with this email already exists');
          return;
        }
        const newUser = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        };
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
        setFormData({
          name: '',
          email: '',
          password: '',
          
        });
        setSuccess('Successful');
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/photorank/">
                        <h3 className="text-4xl font-bold text-purple-600 myfont">
                            Photorank
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSubmit}>
                    {(success || error) && (
                        <>
                            {success ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded my-4" role="alert">
                                {success}
                            </div>
                            ) : (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4" role="alert">
                                {error}
                            </div>
                            )}
                        </>
                        )}

                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    value={formData.name}
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    value={formData.email}
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    value={formData.password}
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        
                        <div className="flex items-center mt-4">
                           
                            <button type="submit" className="text-center w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Register
                            </button>
                          
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <span>
                            <Link className="text-purple-600 hover:underline" to="/photorank/">
                                Log in
                            </Link>
                        </span>
                    </div>
                 
                </div>
            </div>
        </div>
    );
}