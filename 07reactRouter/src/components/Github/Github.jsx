import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(resData => {
    //         console.log(resData);
    //         setData(resData);
    //     })
    // }, [])
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
        Github followers: {data.followers}
        <img width={150} src={data.avatar_url} alt="avatar" />  
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    const data = await response.json();
    return data;
}