import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

export default function ProfileImage({ nick }) {
  //const [imageBase64, setImageBase64] = useState();
  const imgRef = useRef()

  useEffect(() => {
    fetch('https://nr.vector.fi:1891/ramac/rest/v1/user/image?nick='+ nick, {
          method: 'GET'
        })
        .then(response => response.blob())
        .then(data => {
          const reader = new FileReader();
          reader.readAsDataURL(data); 

          reader.onloadend = () => {
            const base64data = reader.result;                
            //setImageBase64(base64data);
            imgRef.current.src = base64data;
          }

          
          
        })
        .catch(error => console.error(error));

    return () => {
      
    }
  }, [])

  return (
    <div>
      <img ref={imgRef}/>
    </div>
  )
}
