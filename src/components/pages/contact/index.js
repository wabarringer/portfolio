// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message

// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required

// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

import React, { useState } from "react";

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
      <div>
        <h1>Contact Me</h1>
      </div>

      <div>
        <h3>Email: wabarringer@gmail.com</h3>
        <p>
          Currently form submission is down. If you'd like to contact me please
          use the email address provided above.
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
        <input
          type="textarea"
          placeholder="Message"
          onChange={handleInputChange}
          value={message}
          name="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </main>
  );
}
