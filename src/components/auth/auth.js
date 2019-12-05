import React, { useContext } from 'react';
import { LoginContext } from './context';


const If = props => {
  return !!props.condition ? props.children : null;
};


const Auth = (props) => {
  const context = useContext(LoginContext)

  let okToRender = false;
  
  try {
    okToRender =
      context.loggedIn &&
      (props.capability
        ? context.user.capabilities.includes(props.capability)
        : true);
  } catch (e) {
    console.warn("Not Authorized");
  }

  return (
    
    // <Auth> <div /> </Auth>
    /// are you logged in?
    /// was there no capability specified?

    // <Auth capability="foo"> <div /> </Auth>
    /// are you logged in?
    /// Is there a capability that we care about?
    /// do you have it?

      <If condition={okToRender}>
        <div>{props.children}</div>
      </If>
    );
}


export default Auth;
