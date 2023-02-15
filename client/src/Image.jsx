import { format } from "date-fns"
import React, { useState } from "react";
import { BiHeart } from "react-icons/bi"
export default function Image(props) {
    const [likes1, setLikes] = useState(props.likes)

    const handleClick = () => {
     if(likes1 === props.likes){
       setLikes(previousLikes => previousLikes + 1)
     }
     else{
       setLikes(previousLikes => previousLikes - 1)
     }
     

    }
    return (
        <>
        <article className='shadow-md bg-white rounded-3xl p-5'>
            <a href={props.urls.full} target="_blank">
            <img src={props.urls.full} alt={props.user.name} loading="lazy" className='h-52 w-full object-cover rounded-3xl md:h-80'/>
            </a>
           <article className="flex flex-wrap items-center justify-between">
           <a href={`https://instagram.com/${props.user.instagram_username}`}>
           <div className='pt-4 flex items-center justify-start'>
            <img src={props.user.profile_image.large} alt={props.user.name} loading="lazy" className='w-12 rounded-full shadow'/>
            <ul className='ml-3'>
                <li className="font-bold text-sm text-slate-800 mb-1">{props.user.name}</li>
                <li className='text-slate-600 text-sm'>{format(new Date(props.created_at), "dd MMMM yyyy")}</li>
            </ul>
            </div></a>
            <div>
                <ul className='text-slate-600 text-sm text-right'>
                    {/* <li><a href={`https://instagram.com/${props.user.instagram_username}`} className='underline'>Instagram</a></li> */}
                    <li className="text-center mt-3"><BiHeart className="md:text-3xl text-4xl cursor-pointer mx-auto text-black" onClick={handleClick}/></li>
                    <li className="mx-auto text-center">{likes1}</li>
                </ul>
            </div>
           </article>
        </article>
        </>
    )
}