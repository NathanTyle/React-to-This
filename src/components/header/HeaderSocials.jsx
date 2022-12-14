import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin className='header_socials-icon'/></a>
        <a href="https://github.com" target="_blank"><BsGithub className='header_socials-icon'/></a>
    </div>
  )
}

export default HeaderSocials