import React, { useState, useContext } from 'react';
import { LoginContext } from './context.js';

const If = props => {
  return !!props.condition ? props.children : null;
};

const initialState = { username: '', password: '' };

//==============================================================
const Login = (props) => {
 const context = useContext(LoginContext);

 const [username, setUsername] = useState(initialState.username);
 const [password, setPassword] = useState(initialState.password);

  const handleChange = e => {
    if(e.target.name === 'username') {
      setUsername({ [e.target.name]: e.target.value })
    } else {
      setPassword({ [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    context.login(username, password);
  };

    return (
      <>
        <If condition={context.loggedIn}>
          <button onClick={context.logout}>Log Out</button>
        </If>

        <If condition={!context.loggedIn}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <button>Login</button>
          </form>
        </If>
      </>
    );
  
}

export default Login;