// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message

// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required

// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

import React, { useState } from "react";
import "./style.css";

function validateEmail(email) {
  const regularExpression =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regularExpression.test(String(email).toLowerCase());
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  function handleInputChange(e) {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
      setEmailError(!validateEmail(inputValue));
    } else if (inputType === "name") {
      setName(inputValue);
      setNameError(inputValue === "");
    } else {
      setMessage(inputValue);
      setMessageError(inputValue === "");
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError(true);
    }
    if (!validateEmail(email)) {
      setEmailError(true);
    }
    if (message === "") {
      setMessageError(true);
    }
    if (name !== "" && validateEmail(email)) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact">
      <div className="page-container-contact">
        <div>
          <div className="page-title-contact">Contact Me</div>
        </div>

        <div className="contact-details">
          <p>
            Currently form submissions are down. You can email me directly at{" "}
            <a href="mailto:wabarringer@gmail.com"> wabarringer@gmail.com</a>
          </p>
        </div>

        <form className="form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
            value={name}
            onBlur={() => setNameError(name === "")}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={email}
            name="email"
            onBlur={() => setEmailError(!validateEmail(email))}
          />
          <textarea
            className="message"
            type="textarea"
            placeholder="Message"
            onChange={handleInputChange}
            value={message}
            name="message"
            onBlur={() => setMessageError(message === "")}
          />

          <button
            className="contact-button"
            type="button"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>

        <div className="alert">
          {nameError && <p>*Name field is empty</p>}
          {emailError && <p>*Email is not valid</p>}
          {messageError && <p>*Message field is empty</p>}
        </div>
      </div>
    </section>
  );
}