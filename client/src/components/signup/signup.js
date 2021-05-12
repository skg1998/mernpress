import '../signup/signup.css';
import React from 'react';
function SignUp() {
    return (
        <div className ="signup">
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
                <div className="inputDetail">
                <p>Confirm Password</p>
                <input type="password"/>
                </div>
                <button>Sign Up</button>
                <p>
                Already a user ? 
                <a href="">Login</a>
                </p>
                
            </div>
                
            </div>
        </div>

    );
}

export default SignUp;