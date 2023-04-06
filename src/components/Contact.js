import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
function Contact() {
    const form = useRef();
    const [showSubmitmessage,shouldShowSubmitMessage] = useState("")

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ef4p1ij', 'template_4bf08jy', form.current, '8zFds9DSiRBbPcLy6')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
            e.target.reset()
            shouldShowSubmitMessage("Message sent successfully...")
            setTimeout(()=>shouldShowSubmitMessage(""),3000)
        }, (error) => {
            console.log(error.text);
        });
    };
    return <>
    <p className="message">{`${showSubmitmessage ?showSubmitmessage:""}`}.</p>

    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input className="submit-button" type="submit" value="Send" />
  </form>
  </>
}
export default Contact