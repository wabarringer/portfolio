import React, { useState } from 'react';
import './style.css';

function validateEmail(email) {
  const regularExpression =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regularExpression.test(String(email).toLowerCase());
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  function handleInputChange(e) {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
      setEmailError(!validateEmail(inputValue));
    } else if (inputType === 'name') {
      setName(inputValue);
      setNameError(inputValue === '');
    } else {
      setMessage(inputValue);
      setMessageError(inputValue === '');
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submitting
    setNameError(name === '');
    setEmailError(!validateEmail(email));
    setMessageError(message === '');

    // Submit the form if there are no errors
    if (name !== '' && validateEmail(email) && message !== '') {
      // Perform your form submission logic here
      console.log('Form submitted');
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section id='contact'>
      <div className='container-contact'>
        <div>
          <div className='title-contact'>Contact Me</div>
        </div>

        <div className='contact-details'>
          <p>
            Currently form submissions are down. You can email me directly at{' '}
            <a href='mailto:wabarringer@gmail.com'>wabarringer@gmail.com</a>
          </p>
        </div>

        <form className='form'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            onChange={handleInputChange}
            value={name}
            onBlur={() => setNameError(name === '')}
          />
          <input
            type='email'
            placeholder='Email'
            onChange={handleInputChange}
            value={email}
            name='email'
            onBlur={() => setEmailError(!validateEmail(email))}
          />
          <textarea
            className='message'
            placeholder='Message'
            onChange={handleInputChange}
            value={message}
            name='message'
            onBlur={() => setMessageError(message === '')}
          />

          <button
            className='contact-button'
            type='submit' // Change the button type to "submit"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>

        <div className='alert'>
          {nameError && <p>*Name field is empty</p>}
          {emailError && <p>*Email is not valid</p>}
          {messageError && <p>*Message field is empty</p>}
        </div>
      </div>
    </section>
  );
}
