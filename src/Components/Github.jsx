import { useEffect, useState } from "react";
import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //---------------------------Method 1--------------------------------------------------
  // const [data,setData]=useState([]);

  // useEffect(()=>{
  //     fetch('https://api.github.com/users/Rutika-B')
  //     .then(response=>response.json())
  //     .then(data=> {
  //         setData(data);
  //         console.log(data);
  //     })
  // },[])

    //---------------------------Method 2--------------------------------------------------

  const data = useLoaderData();//loader for optimization of fetch API

  return (
    <div className="text-center bg-cyan-50 p-3 ">
      Github followers: {data.name}
      <img className="w-32" src={data.avatar_url} alt="profile" />
    </div>
  );
}
export default Github;

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/Rutika-B");
  return response.json();
};

