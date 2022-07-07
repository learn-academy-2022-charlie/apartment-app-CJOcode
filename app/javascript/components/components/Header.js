import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import applogo from '../assets/apartmentAppLogo.png'
import './Header.scss'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <header>
        <Nav className='header-links'>
            <img src={applogo} id='applogo' alt="applogo" />
          
            {logged_in &&
              <NavItem>
                <a href={sign_out_route} className="nav-link">Sign Out</a>
              </NavItem>
            }

            {logged_in &&     
            <NavItem>
              <NavLink to='/apartmentnew'> Add an apartment </NavLink>
            </NavItem>
            }
                 
            {!logged_in &&
              <NavItem>
                <a href={sign_in_route} className="nav-link" id='signin'>Sign In</a>
              </NavItem>
            }

            {!logged_in &&
              <NavItem>
                <a href={new_user_route} className="nav-link">Sign Up</a>
              </NavItem>
            }

            <NavItem>
              <NavLink to='/apartmentindex' id='browse'> Browse apartments </NavLink>
            </NavItem>

        </Nav>
      </header>
    )
  }
}
export default Header