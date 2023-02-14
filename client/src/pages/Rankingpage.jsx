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
            <h2 className="text-center font-bold md:text-2xl text-lg ">2nd</h2>
            <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:w-64 lg:h-64 w-24 h-24 md:w-56 md:h-56 bg-cover bg-center rounded-full border-solid border-4 border-purple-500'></div>
            </div>
            <div className="row-end-3 row-span-2">
            <FaCrown className="lg:text-6xl md:text-5xl text-3xl mx-auto md:mb-2 text-yellow-500" />
            <h2 className="text-center font-bold md:text-2xl text-lg myfont">1st</h2>
            <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:w-64 lg:h-64 w-24 h-24 md:w-56 md:h-56 bg-cover bg-center rounded-full border-solid border-4 border-purple-500'></div>
            </div>
            <div className="row-start-2 row-span-2">
            <FaCrown className="lg:text-6xl md:text-5xl text-3xl mx-auto md:mb-2 browncolor" />
            <h2 className="text-center font-bold md:text-2xl text-lg myfont">3rd</h2>
            <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:w-64 lg:h-64 w-24 h-24 md:w-56 md:h-56 bg-cover bg-center rounded-full border-solid border-4 border-purple-500'></div>
    </div>
        </div>
        </>
    )
}