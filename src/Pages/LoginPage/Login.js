import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo - Copy.png'
import { login,SignUp } from '../../Firebase';
function Login() {

  const [sign,setSign]=useState("Sign In")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [name,setName] = useState("")



  const user_auth = async (event)=> {
    event.preventDefault();
    if(sign==="Sign In"){
      await login(email,password);
    }else{
      await SignUp(name,email,password); 
    }
  }
  
  const setSignUp=()=>{
    setSign("Sign Up")
    
  }
  const setSignIn=()=>{
    setSign("Sign In")
  }

  return (
   <div className="login">
       <img src={logo} alt="logo" className="logo" />
       <div className='login-form'>
        <h1>{sign}</h1>
        <form>
          {sign==="Sign Up" ? 
          <input type="text" placeholder="Your Name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/> : <></> }
          <input type="email" placeholder="Email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <input type="password" placeholder="Password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <button onClick={user_auth} type='submit' className="btn">{sign}</button>
          <div className='help'>
            <div className='remember'>
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className='switch'>
          { sign==="Sign In" ?  <p>New to Netflix ? <span onClick={setSignUp}>Sign Up Now</span></p> :<p>Already have account ? <span onClick={setSignIn}>Sign In Now</span></p> }
        </div>
       </div>
   </div>
  );
}

export default Login;
