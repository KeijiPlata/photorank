import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { FaCrown } from "react-icons/fa";

export default function Rankingpage(){
    return (
        <>
        {/* Navigation bar */}
        <Header />

        <div className="grid grid-rows-3 grid-flow-col justify-center justify-items-center mt-10">
            <div className="row-start-2 row-span-2">
            <FaCrown className="lg:text-6xl md:text-5xl text-3xl mx-auto md:mb-2 text-gray-400" />
            <h2 className="text-center font-bold md:text-2xl text-lg myfont">2nd</h2>
            <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:w-44 lg:h-44 w-24 h-24 md:w-36 md:h-36 bg-cover bg-center rounded-full border-solid border-4 border-purple-500'></div>
        <h2 className="text-center mt-1 font-bold md:text-2xl text-md">Keiji</h2>
        <p className="text-center mt-1 md:text-xl text-sm text-gray-500">999k likes</p>
            </div>
            <div className="row-end-3 row-span-2">
            <FaCrown className="lg:text-6xl md:text-5xl text-3xl mx-auto md:mb-2 text-yellow-500" />
            <h2 className="text-center font-bold md:text-2xl text-lg myfont">1st</h2>
            <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:w-44 lg:h-44 w-24 h-24 md:w-36 md:h-36 bg-cover bg-center rounded-full border-solid border-4 border-purple-500'></div>
    <h2 className="text-center mt-1 font-bold md:text-2xl text-md">Keiji</h2>
    <p className="text-center mt-1 md:text-xl text-sm text-gray-500">999k likes</p>
            </div>
            <div className="row-start-2 row-span-2">
            <FaCrown className="lg:text-6xl md:text-5xl text-3xl mx-auto md:mb-2 browncolor" />
            <h2 className="text-center font-bold md:text-2xl text-lg myfont">3rd</h2>
            <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:w-44 lg:h-44 w-24 h-24 md:w-36 md:h-36 bg-cover bg-center rounded-full border-solid border-4 border-purple-500'></div>
    <h2 className="text-center mt-1 font-bold md:text-2xl text-md">Keiji</h2>
    <p className="text-center mt-1 md:text-xl text-sm text-gray-500">999k likes</p>
    </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:mx-32 md:mx-20 mt-10 mx-8">
            <div className="border-solid md:border-3 border-2 border-black rounded-lg">
            <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:ml-14 md:ml-10 ml-6 lg:w-20 lg:h-20 m-3 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded-full border-solid border-4 border-purple-500'></div>
            </div>

            <div className="border-solid md:border-3 border-2 border-black rounded-lg">
            <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:ml-14 md:ml-10 ml-6 lg:w-20 lg:h-20 m-3 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded-full border-solid border-4 border-purple-500'></div>
            </div>
            <div className="border-solid md:border-3 border-2 border-black rounded-lg">
            <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:ml-14 md:ml-10 ml-6 lg:w-20 lg:h-20 m-3 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded-full border-solid border-4 border-purple-500'></div>
            </div>
            <div className="border-solid md:border-3 border-2 border-black rounded-lg">
            <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:ml-14 md:ml-10 ml-6 lg:w-20 lg:h-20 m-3 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded-full border-solid border-4 border-purple-500'></div>
            </div>
            <div className="border-solid md:border-3 border-2 border-black rounded-lg">
            <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:ml-14 md:ml-10 ml-6 lg:w-20 lg:h-20 m-3 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded-full border-solid border-4 border-purple-500'></div>
            </div>
            <div className="border-solid md:border-3 border-2 border-black rounded-lg">
            <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:ml-14 md:ml-10 ml-6 lg:w-20 lg:h-20 m-3 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded-full border-solid border-4 border-purple-500'></div>
            </div>
            <div className="border-solid md:border-3 border-2 border-black rounded-lg">
            <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:ml-14 md:ml-10 ml-6 lg:w-20 lg:h-20 m-3 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded-full border-solid border-4 border-purple-500'></div>
            </div>
        </div>

        <div className="mt-5">
        <Footer />
        </div>
        
        </>
    )
}