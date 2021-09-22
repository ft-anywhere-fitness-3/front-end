import React from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';
import StyledLogin from '../styledComponents/StyledLogin';

class Login extends React.Component {
  state = {
    credentials: {
      username: 'lambda',
      password: 'school'
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

    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push('/protected')
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
                  name="username"
                  value={this.state.credentials.username}
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="password"
                  value={this.state.credentials.password}
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