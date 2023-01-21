import React from "react";
import tail from '../assets/styles/tailwind.min.css';
import Logo from '../assets/image/logo1.png';
import Header from '../assets/image/header-img.png'
// import Header from '../assets/images/header-img1.png'

export default function Register(){
    return(
        
        <div>
            <div id="hole" class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div class=" flex flex-col items-center">
                    <h1 id="h1-text" class="text-3xl xl:text-1xl font-extrabold">
                        Sign up for <img src={Logo}/>
                    </h1>
                    <div class="w-full flex-1 mt-8">

                        <div class="mx-auto max-w-xs">
                        <input
                            class="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email"
                            placeholder="Full Name ..."
                        />
                        <input
                            class="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="date"
                            placeholder="Birthday date ..."
                        />
                        
                        <input
                            class="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="text"
                            placeholder="Branch of studies ..."
                        />
                        <input
                            class="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="text"
                            placeholder="CIN ..."
                        />
                        <input
                            class="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="text"
                            placeholder="Email ..."
                        />
                        <input
                            class="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="text"
                            placeholder="N• Tel ..."
                        />
                        <input
                            class="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password"
                            placeholder="Password"
                        /> 
                        <button
                            class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                        >
                            <svg
                            class="w-6 h-6 -ml-2"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                            <circle cx="8.5" cy="7" r="4" />
                            <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span class="ml-3">
                                Register
                            </span>
                        </button>
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div  class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" >
                        <img src={Header}/>
                    </div>
                </div>
            </div>
        </div>
    );
}