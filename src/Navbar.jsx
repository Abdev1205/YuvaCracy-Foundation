import React, { useState } from 'react'

function Navbar() {
    const [classMenuOn,setclassMenuOn]=useState('nav-lists');
    

    const menuOpen = () =>{
        setclassMenuOn('nav-lists-open')
        
    }
    const menuClose = () =>{
        setclassMenuOn('nav-lists')
        
    }



    return (
        <>
            <nav>
                <div className="nav-header">
                <img src="https://i.postimg.cc/9M9Kzd2b/yuvacracy.jpg" alt="" srcset="" />
                    <h1>YuvaCracy</h1>
                </div>
                <div onClick={menuClose}  className={classMenuOn}>
                <i onClick={menuClose} class="fa-solid fa-xmark"></i>
                    <li onClick={menuClose}  className="nav-links">Home</li>
                    <li onClick={menuClose} className="nav-links">About</li>
                    <li onClick={menuClose} className="nav-links">Programs</li>
                    <li onClick={menuClose} className="nav-links">Success Stories</li>
                    <li onClick={menuClose} className="nav-links">Contact</li>
                </div>
                <i onClick={menuOpen} class="fa-solid fa-bars"></i>
            </nav>
        </>
    )
}

export default Navbar
