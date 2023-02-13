import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { BiHeart } from "react-icons/bi"

export default function Profilepage(){
     
    return (
        <>
            {/* Navigation bar */}
            <Header />
        
        {/* Profile picture and name */}
        <div className='max-w-[1600px] md:h-[600px] h-[400px] w-full m-auto py-10 px-4 relative'>
      <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` 
    }} className='w-full h-full bg-cover bg-center relative grid place-items-center'>

    <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:w-64 lg:h-64 w-44 h-44 md:w-48 md:h-48 bg-cover bg-center absolute rounded-full border-solid border-4 border-slate-50 md:-bottom-32 -bottom-20 md:left-16'></div>
            
        </div>
        <div className="relative grid place-items-center">
            <div className="absolute md:left-64 lg:left-80 md:-bottom-20 -bottom-40 md:mx-5 md:text-left text-center">
            <h2 className="lg:text-4xl text-3xl font-bold">Keiji Plata <span className="lg:text-2xl text-xl text-gray-400">Rank #1</span></h2>
            <h3 className="text-xl font-bold text-gray-400">Cainta, Rizal</h3>
            </div>
        </div>
        <div className="relative grid place-items-center -bottom-44 md:place-items-end md:-bottom-2 md:right-20">
            <BiHeart size={50}/>
            <h3 className="text-xl font-bold text-gray-400">999k</h3>
        </div>
    </div>

    {/* Photo gallery*/}
    <div className="mt-60 md:mt-32">
        <h2 className="text-center text-4xl font-bold mb-14">Photos</h2>
    <div className="grid grid-cols-3 gap-3  place-content-center place-items-center ">
        <div className="bg-red-500"><h2>1</h2></div>
        <div className="bg-red-500"><h2>2</h2></div>
        <div className="bg-red-500"><h2>3</h2></div>
        <div className="bg-red-500"><h2>4</h2></div>
        <div className="bg-red-500"><h2>5</h2></div>
        <div className="bg-red-500"><h2>6</h2></div>
        <div className="bg-red-500"><h2>7</h2></div>
        <div className="bg-red-500"><h2>8</h2></div>
        <div className="bg-red-500"><h2>9</h2></div>
    </div>
    </div>

    <div className="mt-56">
    <Footer />
    </div>
        
    
    </>
    )
}