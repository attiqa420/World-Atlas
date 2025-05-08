import React from 'react';
import "../index.css";

function Contact() {

  const handleFormSubmit = (e) => {
    e.preventDefault(); // prevent default form behavior
    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <div className='contact-container'>
      <form className='contact-form' onSubmit={handleFormSubmit}>
        <h1 className="contact-title">Contact Us</h1>
        <input
          type='text'
          placeholder='Your Name'
          name='username'
          autoComplete='off'
          required
          className='contact-input'
        />
        <input
          type='email'
          placeholder='Your Email'
          name='email'
          autoComplete='off'
          required
          className='contact-input'
        />
        <textarea
          rows={8}
          name='message'
          placeholder='Your Message'
          className='contact-textarea'
        />
        <button type='submit' className='contact-button'>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
