import './contact.css';
import { useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdCheckCircle } from 'react-icons/md';

const Contact = ({ theme }) => {
  const [state, handleSubmit] = useForm("mdkarqep");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Your message has been sent successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme === "dark" ? "dark" : "light",
        transition: Slide,
        icon: <MdCheckCircle style={{ color: '#001a99', fontSize: '22px' }} />, // Blue icon
      });
    }
  }, [state.succeeded, theme]);

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-mail-envelope-open"></span>
        Contact Me
      </h1>
      <p className="sub-title">I'm always interested in new opportunities and collaborations.
Feel free to reach out by filling out the form below</p>
      <div className="flex">
        <form onSubmit={handleSubmit} className="border">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Your Message</label>
          <textarea name="message" id="message" placeholder="Type your message here..." required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>Send</button>
        </form>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </section>
  );
};

export default Contact;
