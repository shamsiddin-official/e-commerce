import React, {useState} from 'react'
import { db, storage } from "../../../server/firebase";
import { collection, addDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {toast} from 'react-toastify'
import './CreateBlog.css'


function CreateBlog() {
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const usersCollectionRef = collection(db, "Blogs");
    const handleSubmit = async(e)=> {
      e.preventDefault()
      setLoading(true)
        // Upload the file to Firebase Storage
    // const storageRef = ref(storage, `images/${file[0].name}`);
    // const uploadTask = uploadBytes(storageRef, file[0]);

    // Wait for the upload to complete
    // await uploadTask;

    // Get the download URL

    // const downloadURL = await getDownloadURL(storageRef);

    await addDoc(usersCollectionRef, {
      name,
      text,
    })
    .then(()=>{
      toast.success("Ma'lumot saqlandi")
      setName("")
      setText("")
     

      
    })
    .catch(()=>{
      toast.error("Afsuski, ma'lumot saqlanmadi")
      console.log("Ma'lumot saqlanmadi");
    })
    .finally(()=>{
      setLoading(false)

    })
      
    }
  return (
    <div>
        <h2>CreateBlog</h2>
        <br />
        <form onSubmit={handleSubmit} className='create__product-form'>
          <input value={name} onChange={(e)=> setName(e.target.value)} required className='create__product-input' type="text" placeholder='Blog nomi' />
          <textarea className='create-blog-textarea' value={text} onChange={(e)=> setText(e.target.value)} required name="" id="" cols="50" rows="12" placeholder='Matnni kiriting'></textarea>
          <br />
          <br />
          <button disabled={loading} className='create__product-input'>{ loading? "Kuting..." : "Blogni qo'shish"}</button>
        </form>
    </div>
  )
}

export default CreateBlog