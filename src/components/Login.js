import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [err, setError] = useState();
  const [login, setLogin] = useState(
    {
      username:'',
      password:''
    }
  );
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const { push } = useHistory();
  const error = err;

  const handleChange = (event) => {
    event.stopPropagation();
    setLogin({
      ...login,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/login', login)
    .then(res=>{
      localStorage.setItem('token', res.data.payload)
      push("/bubbles")
    })
    .catch(err=> setError(err.response.data.error))

  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">username</label>
          <input data-testid="username" type="text" name="username" value={login.username} onChange={handleChange}/>
          <label htmlFor="password">password</label>
          <input data-testid="password" type="password" name="password" value={login.password} onChange={handleChange}/>
          <button>submit</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.