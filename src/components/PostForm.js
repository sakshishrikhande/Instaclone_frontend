import React,{ useState,useRef } from 'react';
import Header from './Header';
import axios from 'axios';


export default function PostForm() {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');

    const authorRef = useRef()
    const desriptionRef = useRef()
    const locationRef = useRef()
  
    const handleFileChange = e => {
        console.log(e.target.value);
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    };
  
    const handleSubmit = async e => {
      e.preventDefault();
      // handle file upload here
      const formData = new FormData();
      formData.append('postImage', file);
      formData.append('name', authorRef.current.value);
      formData.append('description', desriptionRef.current.value);
      formData.append('location', locationRef.current.value);
  
      try {
        const res = await axios.post('http://127.0.0.1:8001/images', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(res.data);
        window.location.href = "/"
      } catch (err) {
        console.error(err);
      }
    };

  return (
    <>
        <Header/>
        <div style={{padding:'50px'}}>
        <form onSubmit={handleSubmit}>
            <input type="text" required placeholder="Author" ref={authorRef}/>
            <input style={{marginLeft:'10px'}} type="text" required placeholder="Location" ref={locationRef} /><br/><br/>
            <input type="text" required placeholder="Description" ref={desriptionRef}/>
            <input style={{marginLeft:'10px'}} type="file" required onChange={handleFileChange} /><br/><br/>

            <button type="submit">Post</button>
        </form>
        </div>
    </>
    )
}
