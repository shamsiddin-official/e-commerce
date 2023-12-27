import React, { useState,useEffect } from 'react'
import {collection, getDocs } from 'firebase/firestore';
import { db } from '../../../server/firebase'
import './ManageBlog.css'

function ManageBlog() {
    const usersCollectionRef = collection(db, "Blogs");
    const [data, setData]= useState([])
  
    useEffect(()=>{
      const getProducts = async () => {
        const data = await getDocs(usersCollectionRef);
        setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getProducts();
  
  
    },[])
  return (
    <>
        <h2>ManageBlog</h2>
        <br />
    <div className='manage-blog-container'>


        {
            data?.map((el)=>
                <div key={el.id} className='manage-blog-content'>
                    <h2>{el.name}</h2>
                    <br />
                    <p>{el.text}</p>
                </div>
            
            )
        }




    </div>
    </>
  )
}

export default ManageBlog