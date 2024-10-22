import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function App4() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
      }, []);

    function getData(){
         axios.get(`https://jsonplaceholder.typicode.com/posts`)
         .then(result => {
            const myData = result.data;
            //console.log(myData);
            setData(myData);
         })
    }
    
    console.log(data);

  return (
    <>
        <div>Data Display</div>
        {data.map(item => 
            console.log(item.id)
        )}
    </>
  )
}
