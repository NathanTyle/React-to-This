import React from 'react'
import './header.css'
import Cntctbtn from './Cntctbtn'
import Me from '../../assets/Me3.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hi I'm</h5>
        <h1>Tyler Charro</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Cntctbtn/>
        <HeaderSocial/>

        <div className='me'>
          <img src={Me} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header