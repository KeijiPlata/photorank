import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

        const [formData, setFormData] = useState({
          email: '',
          password: '',
        });
        const [error, setError] = useState('');
        const navigate = useNavigate();
      
        const handleSubmit = (e) => {
          e.preventDefault();
          const users = JSON.parse(localStorage.getItem('users')) || [];
          const user = users.find((user) => user.email === formData.email && user.password === formData.password);
          if (!user) {
            setError('Invalid email or password');
            return;
          }
          // successful login
          setFormData({ email: '', password: '' });
          navigate("/homepage")
          setError('');
        };
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600 myfont">
                            Photorank
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSubmit}>
                                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4" role="alert">
                        {error}
                        </div>
                    )}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
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
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <button className=" text-center w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Login
                            </button>
                           
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        You don't have an account?{" "}
                        <span>
                            <Link className="text-purple-600 hover:underline" to="/Registration">
                                Sign up
                            </Link>
                        </span>
                    </div>
                  
                </div>
            </div>
        </div>
    );
}