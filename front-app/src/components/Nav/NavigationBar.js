import React from 'react';
import{ Button } from 'react-bootstrap';
import '../../Css/Nav.css';
import { Link } from 'react-router-dom';

export const NavigationBar = () => (

   
   
          <nav class=" container-fluid navbar bg-dark">
         <h1 className="text-white" >
             <i class="fas fa-code"></i>Expery </h1>
      
         
        
             <div  className="ml-auto nav-item">
                 <span className="mt-3" > <Link to="/Entrepreneur">For Entrepreneur</Link> </span>
                 <span className="mt-3"><Link to="/Expert">For Expert</Link> </span>
                 <Button> <span ><Link to="/login">Sign In</Link> </span></Button>
                 <Button> <span > <Link to="/SignUp" >Sign Up</Link> </span></Button>
            </div>
            </nav>
      

  
)
export default NavigationBar;