import React,{useState,useEffect} from 'react';
import Header from './Header';
import { Post } from './Posts';


export default function LandingPage() {
    const [userData, setUserData] = useState([]);
    useEffect( () => {
        fetch("http://localhost:8001/images")
        .then( (res) => {
            return res.json();
        })
        .then( (users) => {
            setUserData(users);
        })
        .catch( (error) => {
            console.log(error);
        })
    }, []);
  return (
        <>
            <Header/>
            <div style={{display:'flex',alignItems:'center',gap:'1rem',paddingTop:'10px',flexDirection:'column',}}>
            {userData.map( (user,index) => (
                    <Post key={index} index={index} user={user}/>
            ))}
            </div>
        </>
    )
}
