import { useState, useEffect } from "react"
import Image from "./Image"

export default function GetImages() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?count=21&client_id=5tsR0Q7BoBP9T7PgpoqeYi-Om1KktDHVkUHQUwUxsdA`
      )
      const data = await response.json()
      console.log(data)
      setImages(data)
    }

    fetchImages()
  }, [])

  return (
    <>
      {!images ? <h2 className='flex items-center justify-center h-screen text-center'>Loading ... </h2>:
        <section className="px-5 container mx-auto">
          <h1 className="font-bold myfont text-xl md:text-4xl my-10 lg:mt-20 lg:mb-16 capitalize text-center">Photo Gallery</h1>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>{images.map((image) => (
              <Image key={image.id} {...image}/>
          ))}
          </div>
        </section>
      }
    </>
  )
}