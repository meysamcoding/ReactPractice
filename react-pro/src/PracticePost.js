import React, { useState, useEffect } from 'react';

const PracticePost = () => {
    const [dataP, setDataP] = useState([]); // Initialize as an empty array
 
 useEffect(() => {
    const data = async () =>{
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setDataP(data)
        } catch (error) {
            console.error('error:', error)

        }
    }
    data();
 },[])

 const data = dataP.filter((item, index, array) => 
    array.findIndex((x) => x.userId === item.userId) === index
 )
  
  console.log('meysam',data);

    return (
        <div>
            <h1>PracticePost</h1>

            {
            dataP.slice(0, 10).map((item) => {
              return (
                <ul key={item.id}>
                    <li key={item.userId}> {item.id}:{item.title}</li>
                </ul>
              )  
            })
            }
          
        </div>
    );
};

export default PracticePost;
