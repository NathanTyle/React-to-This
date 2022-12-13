import React from 'react'
import './header.css'
import Cntctbtn from './Cntct-btn'
import Me from '../../assets/Me.jpg'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hi I'm</h5>
        <h1>Tyler Charro</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Cntctbtn/>

        <div className='me'>
          <img src={Me} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header