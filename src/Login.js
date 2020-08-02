import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";


function Login() {

  const login = event => {
    event.preventDefault();
  }

  const register = event => {
    event.preventDefault();
  }

  return (
    <div className="login">
      <Link to="/">
       <img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
         alt=""
         className="login_logo"
       />

    </Link>

<div className="login_container">
     <h1>Sign In</h1>
     <form>
       <h5>E-mail</h5>
       <input type="E-mail" />
       <h5>Password</h5>

       <input type="Password" />

       <button type="Submit" onClick={login} className="login_signInBtn">Sign In</button>
     </form>


       <p>By signing in you agree to all the privacy policy by this site our cookies notice and your are safe
       </p>

       <button onClick={register} class="login_regButton">Create Shopping Account</button>

</div>


</div>
  );
}

export default Login;
