// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message

// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required

// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

import React, { useState } from "react";
import "./style.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleInputChange(e) {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main>
      <div className="page-container-contact">
        <div>
          <div className="page-title-contact">Contact Me</div>
        </div>

        <div className="contact-details">
          <p>
            Currently form submissions are down. You can email me directly at{" "}
            <a href="mailto:email@example.com"> wabarringer@gmail.com</a>
          </p>
        </div>

        <form className="form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
            value={name}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={email}
            name="email"
          />
          <textarea
            className="message"
            type="textarea"
            placeholder="Message"
            onChange={handleInputChange}
            value={message}
            name="message"
          />
          <button
            className="contact-button"
            type="button"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
