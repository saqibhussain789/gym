import React from 'react'
import './Join.css'
import emailjs from "@emailjs/browser";
import { useRef } from 'react';

export const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s7wt359', 'template_pbaz357', form.current, {
            publicKey: 'zN143qG5zsdMlb5Sz',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className='Join' id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>Ready to </span>
                <span>Level up </span>
            </div>
            <div>
                <span>your body </span>
                <span className='stroke-text'>with us?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your Email address'/>
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>

    </div>
  )
}
