import {Link} from "react-router-dom";
import {useEffect, useState, useContext} from "react";
import {UserContext} from "./UserContext"

export default function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',

    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      })

    });
  }, []);

  function logout() {
    fetch('http:localhost:4000/logout', {
      credentials: 'include',
      method: 'POST', 
    });
    setUserInfo(null);

  }
  const username = userInfo?.username;


    return(
      <> 
        <header> 
        <Link to= "/" className="logo">Poet Lands</Link>
        <nav>
          {username && (
            <>
              <Link to= "/"> Welcome {username}! </Link>
              <Link to ="/poem"> Create new poem </Link>
              <Link to ="/"> <a onClick = {logout}> Logout </a> </Link>
            </>
          )}
          {!username && (
            <>
            <Link to = "/login"> Login </Link>
            <Link to = "/register"> Register </Link>
            </> 
          )}
          <div class ="dot"></div>
        </nav>
      </header>
    </> 
      
    )
}