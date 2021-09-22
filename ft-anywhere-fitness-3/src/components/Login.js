import React from 'react';
import StyledLogin from '../styledComponents/StyledLogin';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      user_username: 'testUser',
      user_password: 'password'
    }
  };
    
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    console.log(this.state.credentials)

    axios
      .post('https://ft-anywhere-fitness-3.herokuapp.com/api/auth/login', this.state.credentials)
      .then(res => {
        console.log(res.data)
        localStorage.setItem("token", res.data.payload);
        if(res.data.user_role === 1){
          this.props.history.push('/instructor')
        }
        else if (res.data.user_role === 2){
          this.props.history.push('/client')
        }
        
      })
      .catch(err => {
        console.log(err)
      })
  };

  render() {
    return (
      <StyledLogin>
        <div className='container'>
          <div className='row'>
            <h2>Login</h2>
            <form onSubmit={this.login}>
              <div className='col'>
                <input
                  type="text"
                  name="user_username"
                  value={this.state.credentials.user_username}
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="user_password"
                  value={this.state.credentials.user_password}
                  onChange={this.handleChange}
                />
                <button className='md-button'>Log in</button>
              </div>
            </form>
          </div>
        </div>
      </StyledLogin>
    );
  }
}

export default Login;