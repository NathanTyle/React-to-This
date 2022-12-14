import React from 'react'
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {AiTwotonePhone} from 'react-icons/ai'

const Contact = () => {
    return (
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
  
        <div className='container contact_container'>
          <div className='contact_options'>
            <article className='contact_option'>
              <AiTwotoneMail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>tylercharro@gmail.com</h5>
              <a href="mailto:tylercharro@gmail.com" target="_blank">Send an Email</a>
            </article>
            <article className='contact_option'>
              <BsMessenger className='contact_option-icon'/>
              <h4>Messenger</h4>
              <h5>Tyler Charro</h5>
              <a href="https://m.me/tyler.charro" target="_blank">Send Me a Message</a>
            </article>
            <article className='contact_option'>
              <AiTwotonePhone className='contact_option-icon'/>
              <h4>Phone</h4>
              <h5>+1234567890</h5>
              <a href="+1234567890" target="_blank">Give Me a Call</a>
            </article>
          </div>
          {/* End Of Contact Options */}
          <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name='message' rows="7" placeholder='Your Message'></textarea>
            <button type='submit' className='btn btn-primary'>Send Me a Message</button>
          </form>
        </div>
      </section>
    )
  }
  
export default Contact