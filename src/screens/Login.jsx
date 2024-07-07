import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { Link,useNavigate } from 'react-router-dom';



function Login() {

  const [Credential,setCredential]= useState({email:"",password:""})
    let navigate = useNavigate()
    const handlesubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/loginuser",{
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
          localStorage.setItem("authtoken",json.authtoken);
          localStorage.setItem('userEmail', Credential.email)
          //console.log(localStorage.getItem("authtoken"));
          navigate('/');
      }
    }

    const onchange = (e)=>{
        setCredential({...Credential,[e.target.name]:e.target.value})
    }


  return (
    <>
    <Navbar/>

    <div style={{maxWidth:'50%',marginLeft:'auto',marginRight:'auto',height:'500px',display:'flex',alignItems:'center'}}>
    <div className='container' style={{display:'flex',justifyContent:'center',marginTop:'5%'}}>
    <form onSubmit={handlesubmit}>
  <div className="form-group">
    <h3 className='text-center'>LOG IN</h3><br/>
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={Credential.email} onChange={onchange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={Credential.password} onChange={onchange}/>
  </div>
  
  <br></br>
  <div className='text-center'>
  <button type="submit" className="btn btn-success" style={{marginRight:'18%'}}>Log In</button>
  <Link to='/createuser' className='btn btn-primary'>Sign Up</Link>
  </div>
</form>
</div>
    </div>

    </>
  )
}

export default Login
