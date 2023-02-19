import React from 'react'
import Logo from '../assets/icon.svg'
import Camera from '../assets/camera.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div style={{display:'flex',justifyContent:'space-between',border:'1px solid #006238',padding:'20px'}}>
    <Link to={"/"}>
    <div style={{display:'flex',gap:'10px'}}>
            <div>
                <img src={Logo}/>
            </div>
            <div style={{fontSize:"30px",fontStyle:'normal normal normal 64px/85px Palatino',color:'#006238',display:'flex',alignItems:'center'}}>
                Instaclone
            </div>
    </div>
    </Link>
        <div>
            <Link to={"/post"}>
                <img src={Camera} />
            </Link>
        </div>
    </div>
  )
}

export default Header