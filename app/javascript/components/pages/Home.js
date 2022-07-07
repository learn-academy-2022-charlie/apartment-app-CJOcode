import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';
import './Home.scss'
export default class Home extends Component {
  render() {
    return (
      <>
        <div className='home-component'>
          <div className='intro'>
            <h1>Welcome to Apartment Finder!</h1>
            <h2>If your looking to relocate you came to the right place! This is a one stop shop to help assist you in finding your next home</h2>
          </div>
          <div>
            <NavLink to={`/apartmentindex`}>
            <Button color="primary" size="lg">Explore apartments</Button>{' '}
            </NavLink>
          </div>
        </div>
      </>
    )
  }
}
