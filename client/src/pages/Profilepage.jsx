import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Profilepage(){
     
    return (
        <>
        
            <Header />
        
        <div className='max-w-[1600px] md:h-[600px] h-[400px] w-full m-auto py-10 px-4 relative'>
      <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80")` 
    }} className='w-full h-full bg-cover bg-center relative grid place-items-center'>
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt="Profile" 
            className="md:w-64 md:h-64 w-44 h-44 absolute rounded-full border-solid border-4 border-slate-50 md:-bottom-32 -bottom-20 md:left-16"/>

            
        </div>
        <div className="relative grid place-items-center">
            <div className="absolute md:left-80 md:-bottom-20 -bottom-40 md:mx-5 md:text-left text-center">
            <h2 className="text-4xl font-bold">Keiji Plata <span className="text-2xl text-gray-400">Rank #1</span></h2>
            <h3 className="text-xl font-bold text-gray-400">Cainta, Rizal</h3>
            
            </div>
        </div>
        
       
    </div>
    <div className="mt-36">
    <Footer />
    </div>
        
    
    </>
    )
}