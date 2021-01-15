import React,{useState,useEffect} from 'react'
import axios from 'axios';

function My() {
  const [post,setPost] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      setPost(res.data)
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      <h2>Calling APi</h2>
       <ul>
     {post.map(res => <li key={res.id}>{res.id} {res.title}</li>)}
       </ul>
    </div>
  )
}

export default My


// import React, { useState } from "react";
// import "./My.css";
// import Lovely from './Lovely';

// function My() {
//   const [inputs, setInput] = useState("");
//   return (
//     <div className="main-_input">
//       <input
//         value={inputs}
//         onChange={(e) => setInput(e.target.value)}
//         type="text"
//         placeholder="Search anything..."
//       />
//         {inputs == "" ? null : <Lovely name={inputs}/>
// }        </div>
//   );
// }

// export default My;
