import React  from 'react';
import NavigationBar from '../Nav/NavigationBar'
import '../../Css/singUp.css';
import  {connect} from 'react-redux'
import { Link } from 'react-router-dom';

import {register} from "../../actions/auth"

class FormSignup  extends React.Component {
 
  state = {
    name:"",
       email:"",
       password:"",
       role:"",
       phoneNumber:"",
       image:"",
       field:"",
       location:""
  };

  
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    return (<>
    
    <NavigationBar/>
     <div className="Login" >
    
        <section className="container formulaire mt-5 px-2 py-5">
       <h1 className="large text-primary">Sign Up</h1>
       <p className="lead"><i class="fas fa-user"></i> Create Your Account</p>
       <form className="form">
         <div className="form-group">
         <input  className="sign" type="text"
           placeholder="Name"
            value={this.state.name} 
            onChange={e=>(this.onChange(e))}
            id="name" required />
        </div>
        <div className="form-group">
          <input className="sign"
           type="email" 
           placeholder="Email Address"
            id="email"
            value={this.state.email} 
            onChange={e=>(this.onChange(e))} />
          
        </div>
        <div className="form-group">
          <input className="sign"
           
            placeholder="phone number" 
            id="phoneNumber"
            value={this.state.phoneNumber} 
            onChange={e=>(this.onChange(e))} />
         
          
        </div>
        <div className="form-group">
          <input className="sign" 
          type="text" 
          placeholder="put your image" 
          id="image" 
          value={this.state.image} 
          onChange={e=>(this.onChange(e))} />
          
          
        </div>
        <div className="form-group ">
        <select id="field"   onChange={e=>(this.onChange(e))}  className="form-select sign">
        <option>Choose your field</option>
        <option>developper</option>
        <option>marketing</option>
        <option>finance</option>
      </select>
        </div>
        <div className="form-group ">
        <select id="location"   onChange={e=>(this.onChange(e))} className="form-select sign">
                <option> Choose your Location</option>
                <option>ALGERIA</option>
                <option>TUNISIA</option>
                <option>MAROC</option>
                <option>EGYPT</option>
                <option>FRANCE</option>
      </select>
        </div>
        <div className="form-group">
          <input className="sign"
            type="password"
            placeholder="Password"
            id="password"
          
            value={this.state.password} 
            onChange={e=>(this.onChange(e))}
          />
        </div>
        <div className="form-group">
          <input className="sign"
            type="text"
          
            id="role"
           
            value={this.state.role} 
            onChange={e=>(this.onChange(e))}
          />
        </div>
        <input type="button" class="btn btn-primary" value="Register"  onClick={() => 
               
                this.props.register({
                  name:this.state.name,
                  email:this.state.email,
                  password:this.state.password,
                  role:this.state.role,
                  phoneNumber:this.state.phoneNumber,
                  image:this.state.image,
                  field:this.state.field,
                  location:this.state.location
                })
              } />
      </form>
      <p class="my-1 lead">
        Already have an account? <Link to="login">Sign In</Link>
      </p>
    </section>
    </div>
    
    </>)
  }
}
  const mapDispatchToProps = (dispatch) => ({
    register: (el) => dispatch(register(el)),
  });


export default connect (null,mapDispatchToProps) (FormSignup);


