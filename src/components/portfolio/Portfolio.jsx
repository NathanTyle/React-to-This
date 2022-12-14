import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Project-1.PNG'
import IMG2 from '../../assets/LTM.PNG'
import IMG3 from '../../assets/escent.PNG'

const Portfolio = () => {
    return (
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
  
        <div className='container portfolio_container'>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={IMG1} alt="Anination" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://hieuwy.github.io/project-1/" className='btn btn-primary'>Github</a>
          </article>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={IMG2} alt="Anination" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://listen-to-me512.herokuapp.com/" className='btn btn-primary'>Github</a>
          </article>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={IMG3} alt="Anination" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://escentials.herokuapp.com/" className='btn btn-primary'>Github</a>
          </article>
        </div>
      </section>
    )
  }

export default Portfolio