import React, {useState} from 'react';
import StyledLogin from '../styledComponents/StyledLogin';
import axios from 'axios';
import { Link } from 'react-router-dom';

const initialState = {
  user_username: 'testUser',
  user_password: 'password'
}

const Login = (props) => {

  const [credentials, setCredentials] = useState(initialState);
  const { history, setLoggedIn } = props;
    
  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const login = e => {
    e.preventDefault();
    console.log(credentials)

    axios
      .post('https://ft-anywhere-fitness-3.herokuapp.com/api/auth/login', credentials)
      .then(res => {
        setLoggedIn(true)
        console.log(res.data)
        if(res.data.user_role === 1){
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_role", res.data.user_role);
          localStorage.setItem("instructor_id", res.data.user_id);
          history.push('/instructor')
        }
        else if (res.data.user_role === 2){
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_role", res.data.user_role);
          history.push('/client')
        }
        
      })
      .catch(err => {
        console.log(err)
      })
  };

    return (
      <StyledLogin>
        <div className='container'>
          <div className='row'>
            <h2>Login</h2>
            <form onSubmit={login}>
              <div className='col'>
                <input
                  type="text"
                  name="user_username"
                  value={credentials.user_username}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="user_password"
                  value={credentials.user_password}
                  onChange={handleChange}
                />
                <button className='md-button'>Log in</button>
              </div>
              <div className='input-div'>
                <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
              </div>
            </form>
          </div>
        </div>
      </StyledLogin>
    );
}

export default Login;