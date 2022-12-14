import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/tyler-charro-388b3a23b/" target="_blank"><BsLinkedin className='header_socials-icon'/></a>
        <a href="https://github.com/NathanTyle" target="_blank"><BsGithub className='header_socials-icon'/></a>
    </div>
  )
}

export default HeaderSocials