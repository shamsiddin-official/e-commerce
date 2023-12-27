import React, {useEffect, useState} from 'react'
import Products from '../../../components/products/Product'
import { db } from '../../../server/firebase'
import {collection, getDocs} from 'firebase/firestore'

function ManageProduct() {
  const usersCollectionRef = collection(db, "products");
  const [data, setData]= useState([])

  useEffect(()=>{
    const getProducts = async () => {
      const data = await getDocs(usersCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();


  },[])

  return (
    
    <div>
        <h2>ManageProduct</h2>


        <Products data={data}/>
        
        
    </div>
  )
}

export default ManageProduct