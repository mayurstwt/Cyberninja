"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="flex items-center justify-center px-2 md:px-0 py-32 bg-black">
            <div className="border flex flex-col justify-center rounded-xl p-8 shadow-lg w-[30rem] h-[35rem]">
            <h1 className='text-3xl font-bold md:text-4xl mb-10 leading-normal bg-gradient-to-b from-gray-500 to-white bg-clip-text text-transparent'>
            Join us @CyberNinja</h1>

                <div className="mb-4">
                    <button className="w-full flex items-center gap-4 border text-white py-2 transition duration-200">
                        <FaGoogle className="ml-5" />
                        Sign up with Google
                    </button>
                </div>

                <div className="mb-4">
                    <button className="w-full flex items-center gap-4 border text-white py-2 rounded transition duration-200">
                        <FaGithub className="ml-5" />
                        Sign up with GitHub
                    </button>
                </div>
                <p className="text-center text-gray-400 mb-4">OR continue with</p>

                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4 relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-2 top-3 text-xl text-gray-400 "
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <div className="mb-4 relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-2 top-3 text-xl text-gray-400 "
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <div className="mb-6">
                    <button className="border-[0.13rem] w-full text-white py-2 px-6 rounded-lg">
                        Sign in
                    </button>
                </div>

                <p className="text-center text-gray-400">
                Already have an account? <a href="#" className="text-blue-500 hover:underline"><Link href={"/login"}>Sign in</Link></a>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
