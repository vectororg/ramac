import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

export default function ProfileImage({ nick }) {
  //const [imageBase64, setImageBase64] = useState();
  const imgRef = useRef()

  useEffect(() => {

    const fetchImage = async () => {
      try {
        const response = await fetch('https://nr.vector.fi:1891/ramac/rest/v1/user/image?nick='+ nick, {
          method: 'GET'
        })
  
        if (response.ok) {
          const data = await response.blob();
  
          const reader = new FileReader();
          reader.readAsDataURL(data); 
  
          reader.onloadend = () => {
            const base64data = reader.result;                
            imgRef.current.src = base64data;
          }
        }
      } catch (error) {
        console.error(error)
      }      
    }

    fetchImage()

    return () => {
      
    }
  }, [])

  return (
    <div>
      <img ref={imgRef}/>
    </div>
  )
}
