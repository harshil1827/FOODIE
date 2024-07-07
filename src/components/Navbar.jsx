import React from 'react'
import  { Link } from 'react-router-dom'
import { Usecart } from './ContextReducer';

function Navbar() {

  let data = Usecart();
  const handlelogout=()=>{
    localStorage.removeItem("authtoken");
    localStorage.removeItem("userEmail");
  }
  return (
    <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand fs-2" to="#" style={{marginLeft:'1%'}}><b><i>FOODIE</i></b></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto ">
          
          

          {(localStorage.getItem("authtoken"))?<div className='d-flex'>
            <li className="nav-item active">
            <Link className="nav-link active fs-5" to="/">Home </Link>
          </li>
          <li className="nav-item active">
          <Link className="nav-link active fs-5" to="/myorder">My Orders </Link>
        </li></div>:""
          }
          
        </ul>
        <div className='d-flex'>
          {(localStorage.getItem("authtoken"))?<div>
          <Link className="btn bg-white mx-1" to="/cart">My Cart {" "}
          <span className="badge bg-dark" style={{borderRadius:"50%"}}>{data.length}</span>
          </Link>
          <Link className="btn bg-white text-danger mx-1" to="/login" onClick={handlelogout}>LogOut </Link>
          </div>
          :<div>
            <Link className="btn bg-white mx-1" to="/createuser">Signup </Link>
            <Link className=" btn bg-white mx-1 " to="/login">Login</Link>
            </div>
          }
        </div>

      </div>
    </nav>
    </>
  )
}

export default Navbar
