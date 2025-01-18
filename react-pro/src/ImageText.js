import React, { useEffect, useState } from 'react'

 const ImageText = () => {
    const [image, setImage] = useState([])

    useEffect(()  => {
        const data = async () => {
        try {
            const imageText = await fetch('https://jsonplaceholder.typicode.com/photos');
            const dataImage = await imageText.json();
            setImage(dataImage)
        } catch (error) {
            console.error(error)
        }
    }
    data();
     
    }, [])
    console.log('meysam', image.slice(0, 5))
  return (
    <div>
        <h1> Image Text </h1>
        {
            image.slice(0, 5).map((item, index) => {
              return (  <div key={item.id}>
                    <p>{item.id}</p>
                    <img src={'https://www.w3schools.com/html/pic_trulli.jpg'} alt='example'/>
                </div> )
            })
        }

    </div>
  )
}


export default ImageText;