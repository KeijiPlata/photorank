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
        <div className='max-w-[1600px] md:h-[600px] h-[400px] w-full m-auto py-10  relative'>
      <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` 
    }} className='w-full h-full bg-cover bg-center relative grid place-items-center'>

    <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` 
    }} className='lg:w-64 lg:h-64 w-44 h-44 md:w-48 md:h-48 bg-cover bg-center absolute rounded-full border-solid border-4 border-slate-50 md:-bottom-32 -bottom-20 md:left-16'></div>
            
        </div>
        <div className="relative grid place-items-center">
            <div className="absolute md:left-64 lg:left-80 md:-bottom-20 -bottom-40 md:mx-5 md:text-left text-center">
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold">Keiji Plata <span className="lg:text-2xl md:text-xl text-lg text-gray-400">Rank #1</span></h2>
            <h3 className=":md:text-xl text-lg font-bold text-gray-400">Cainta, Rizal</h3>
            </div>
        </div>
        <div className="relative grid place-items-center -bottom-44 md:place-items-end md:-bottom-2 md:right-20">
            <BiHeart className="md:text-5xl text-4xl"/>
            <h3 className="md:text-xl lg:text-lg font-bold text-gray-400">999k</h3>
        </div>
    </div>

    {/* Photo gallery*/}
    <div className="mt-60 md:mt-32">
        <h2 className="text-center md:text-4xl text-3xl myfont font-bold md:mb-14 mb-8">Photos</h2>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-rows-1 gap-2 place-content-center md:m-5 sm:m-2 relative">
        <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity cursor-pointer"><p className="text-white text-lg font-bold m-5">Night Sky</p></div>
          <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` 
    }} className='lg:h-96 md:w-full w-screen md:h-56 h-96 bg-cover bg-center'></div></div>
        <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity cursor-pointer"><p className="text-white text-lg font-bold m-5">Night Sky</p></div>
          <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` 
    }} className='lg:h-96 md:w-full w-screen md:h-56 h-96 bg-cover bg-center'></div></div>
          <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity cursor-pointer"><p className="text-white text-lg font-bold m-5">Night Sky</p></div>
          <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` 
    }} className='lg:h-96 md:w-full w-screen md:h-56 h-96 bg-cover bg-center'></div></div>
          <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity cursor-pointer"><p className="text-white text-lg font-bold m-5">Night Sky</p></div>
          <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` 
    }} className='lg:h-96 md:w-full w-screen md:h-56 h-96 bg-cover bg-center'></div></div>
          <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity cursor-pointer"><p className="text-white text-lg font-bold m-5">Night Sky</p></div>
          <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` 
    }} className='lg:h-96 md:w-full w-screen md:h-56 h-96 bg-cover bg-center'></div></div>
         <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity cursor-pointer"><p className="text-white text-lg font-bold m-5">Night Sky</p></div>
          <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` 
    }} className='lg:h-96 md:w-full w-screen md:h-56 h-96 bg-cover bg-center'></div></div>
          <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity cursor-pointer"><p className="text-white text-lg font-bold m-5">Night Sky</p></div>
          <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` 
    }} className='lg:h-96 md:w-full w-screen md:h-56 h-96 bg-cover bg-center'></div></div>
          <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity cursor-pointer"><p className="text-white text-lg font-bold m-5">Night Sky</p></div>
          <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` 
    }} className='lg:h-96 md:w-full w-screen md:h-56 h-96 bg-cover bg-center'></div></div>
          <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity cursor-pointer"><p className="text-white text-lg font-bold m-5">Night Sky</p></div>
          <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` 
    }} className='lg:h-96 md:w-full w-screen md:h-56 h-96 bg-cover bg-center'></div></div>
     <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity cursor-pointer"><p className="text-white text-lg font-bold m-5">Night Sky</p></div>
          <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` 
    }} className='lg:h-96 md:w-full w-screen md:h-56 h-96 bg-cover bg-center'></div></div>
     <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity cursor-pointer"><p className="text-white text-lg font-bold m-5">Night Sky</p></div>
          <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` 
    }} className='lg:h-96 md:w-full w-screen md:h-56 h-96 bg-cover bg-center'></div></div>
     <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity cursor-pointer"><p className="text-white text-lg font-bold m-5">Night Sky</p></div>
          <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1675410200389-903e50c46cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` 
    }} className='lg:h-96 md:w-full w-screen md:h-56 h-96 bg-cover bg-center'></div></div>
    </div>
    </div>

    <div className="lg:mt-16 md:mt-9 mt-6">
    <Footer />
    </div>
        
    
    </>
    )
}