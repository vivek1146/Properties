import React from "react";
const Contact = () => {
  return (
    <>
      <section id='contact'>
        <h1>CONTACT Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aliquid
          similique voluptas!
        </p>
        <div className='container'>
          <img src='/about.jpg' alt='about' />
          <div className='content'>
            <h3>Let's connect</h3>
            <div>
              <p>Phone</p>
              <span>7535921146</span>
            </div>
            <div>
              <p>Email</p>
              <span>vivekdhiman476@gmail.com</span>
            </div>
            <div>
              <p>Address</p>
              <span>House No.123 </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
