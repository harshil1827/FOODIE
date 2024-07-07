import React, { useState } from 'react'
import { Link ,useNavigate  } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Signup() {
    const [Credential,setCredential]= useState({name:"",email:"",password:"",geolocation:""})
    let navigate = useNavigate()

    const handlesubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:Credential.name,email:Credential.email,password:Credential.password,location:Credential.geolocation})
        })
        const json = await response.json()
       // console.log(json);

        if(!json.success){
            alert("enter valid credentials");
        }
        if(json.success){
          navigate('/login');
      }
    }

    const onchange = (e)=>{
        setCredential({...Credential,[e.target.name]:e.target.value})
    }

  return (
    <>
    <Navbar/>
    <br/>
    <div style={{maxWidth:'50%',marginLeft:'auto',marginRight:'auto',height:'500px',display:'flex',alignItems:'center'}}>
    <div className='container ' style={{display:'flex',justifyContent:'center',marginTop:'5%'}}>
    <form onSubmit={handlesubmit}>
  <div className="form-group">
  <div className="form-group"><br/><br/>
    <h3 className='text-center'>SIGN UP</h3><br/>
    <label htmlFor="exampleInputPassword1">Username</label>
    <input type="text" className="form-control" placeholder="Name" name='name' value={Credential.name} onChange={onchange}/>
  </div>
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={Credential.email} onChange={onchange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={Credential.password} onChange={onchange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="geolocation" name='geolocation' value={Credential.geolocation} onChange={onchange}/>
  </div>
  <br></br>
  <div className='text-center'>
  <button type="submit" className="btn btn-success" style={{marginRight:'18%'}}>Submit</button>
  <Link to='/login' className='btn btn-warning'>Already a User</Link>
  </div>
</form>
</div>
    </div>
 
    </>
  )
}

export default Signup
