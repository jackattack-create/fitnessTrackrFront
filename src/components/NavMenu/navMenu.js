import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import './NavMenu.css'


const NavMenu = ({token}) => {

  const history = useHistory()
  const LogOut = () => {
    localStorage.removeItem('token');
    history.push('/signIn')
}

    return (

        <nav className="mainNav">
          <Link to={`/routines`}>
            <a href="#">
              Routines
            </a>
          </Link>
          
            {/* <a href="#">
              My Routines
            </a> */}
            { token ? (
              <a href="#" onClick={LogOut}>
                Login Out
              </a>
              ) : (
                <div>
                  <Link to={`/signIn`}>
                    <a href='#'>Log In</a>
                  </Link>
                /
                <Link to={`/register`}>
                  <a href="#">Register</a>
              </Link>
                </div>
              )}
        </nav>
    )
}

export default NavMenu