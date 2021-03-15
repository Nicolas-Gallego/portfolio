import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log(name);
  console.log(email);
  console.log(message);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/send", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  };
  return (
    <>
      <p className="contactSentence">
        If you’d like to send me a message, I can be reached through various
        ways! If you prefer email, simply fill out the form below or send me a
        message directly at{" "}
        <a
          className="custom-underline inTextLink"
          href={"mailto:gallego.nicolaspro@gmail.com"}
        >
          gallego.nicolaspro@gmail.com
        </a>
      </p>
      <div className="container contactForm">
        <div className="row">
          <form
            onSubmit={handleSubmit}
            id="contact-form"
            className="col-lg-5 col-sm-10"
            method="POST"
          >
            <div className="form-group col-sm-12">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                name="email"
                type="email"
                value={email}
                className="form-control"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={message}
                className="form-control"
                rows="5"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
          <div className="col-5 offset-1">
            <p className="following">
              Elsewhere, I can be found at the following:
            </p>
            <p>
              {" "}
              <a
                className="custom-underline socialLinks"
                href="https://www.linkedin.com/in/nicolas-gallego-3212a0b2/"
                target="blank"
              >
                <i className="fab fa-linkedin"></i>
                <span> Linkedin</span>
              </a>
              <p>
                <a
                  className="custom-underline socialLinks"
                  href="https://github.com/Nicolas-Gallego"
                  target="blank"
                >
                  <i class="fab fa-github-square"></i>
                  <span> Github</span>
                </a>
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
