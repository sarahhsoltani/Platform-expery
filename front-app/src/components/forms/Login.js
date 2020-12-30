import React,{useState} from 'react';
import NavigationBar from '../Nav/NavigationBar'
import '../../Css/singUp.css';
import { Link } from 'react-router-dom';

export const Login = () => {
 const  [formData,setFormData]=useState({
 
   email:"",
   password:"",
  
 })
const {email,password,}=formData;
const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})
const onSubmit=e=>{
  e.preventDefault();
 
    console.log("success")
  
}

  return (
    <div>
        <NavigationBar/>
    <div className="Login" >
    
       <section className="container formulaire mt-5 px-2 py-5">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i class="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form"  onSubmit={e=>onSubmit(e)}>
        
        <div className="form-group">
          <input className="sign"
           type="email" 
           placeholder="Email Address"
            name="email"
            value={email} 
            onChange={e=>(onChange(e))} />
          
        </div>
      
    
        <div className="form-group">
          <input className="sign"
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password} 
            onChange={e=>(onChange(e))}
          />
        </div>
        
        <input type="submit" class="btn btn-primary" value="Login" />
      </form>
      <p class="my-1 lead">
        Don't have an account? <Link to="SignUp">Sign up</Link>
      </p>
    </section>
    </div>
    </div>
  );
};

export default Login;
