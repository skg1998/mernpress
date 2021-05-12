import React from 'react';
import '../signup/login.css';

function Login() {
    return (
      <div className ="Login">
        <div className ="card">
          <div className= "title">Sign Up</div> 
          <div className="detail">
            <div className="inputDetail">
              <p>E-mail</p>
              <input type="email"/>
            </div>
            <div className="inputDetail">
              <p>Password</p>
              <input type="password"/>
            </div>
            <button>Login</button>
            <p> 
                <a href="">Forgot Password</a>
            </p>
          </div>     
        </div>
      </div>
      
          
      );
  }
  
  export default Login;