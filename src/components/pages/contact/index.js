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

  function handleChange(e) {
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
    alert(
      `Thank you, ${name}, for your submission! At this point in time, it will not be received as the backend code for the form has not yet been created.`
    );

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
      </div>
      <form onSubmit={handleFormSubmit}>
        <tr>
          <td>
            <label htmlFor="name">Name: </label>
          </td>
          <td className="center">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={name}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="email">Email: </label>
          </td>
          <td>
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={email}
              name="email"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="message">Message: </label>
          </td>
          <td>
            <textarea
              type="text"
              placeholder="Message"
              onChange={handleChange}
              value={message}
              name="message"
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button type="submit">Submit</button>
          </td>
        </tr>
      </form>
    </main>
  );
}
