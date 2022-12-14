import React from 'react'
import './about.css' 
import Me from '../../assets/me-about.jpg'
import {RiSuitcaseFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {GiDeskLamp} from 'react-icons/gi'

const About = () => {
    return (
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
  
        <div className="container about_container">
          <div className="about_me">
            <div className='about_me-image'>
              <img src={Me} alt="About Image" />
            </div>
          </div>
  
          <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <RiSuitcaseFill className="about_icon"/>
                <h5>Experience</h5>
                <small>6+ months bootcamp </small>
              </article>
            </div>
          </div>
  
          <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <FiUsers className="about_icon"/>
                <h5>Colaborators</h5>
                <small>12+ colaborators throughout the camp </small>
              </article>
            </div>
          </div>
  
          <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <GiDeskLamp className="about_icon"/>
                <h5>Projects</h5>
                <small>3 projects as well as multiple challenge assignments</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora est nihil, earum eveniet deserunt cumque nam. Nemo nobis, debitis, aliquid dolore voluptatum aspernatur incidunt, placeat fugit fugiat obcaecati laudantium eligendi?
            </p>
  
            <a href="#contact" className='btn btn-primary'>Got time to chat?</a>
          </div>
        </div>
      </section>
    )
  }
  
  export default About