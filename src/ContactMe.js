import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import './ContactMe.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
  
function ContactMe(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_ocm0cm4", 'template_eb2egy8', form.current, 'BeH994FBrxLskJ5rq')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <div>
            <NavBar/>
            <div className="ContactMeDiv">
                <div  data-aos="zoom-in" data-aos-easing="linear"className="contact">
                    <legend className="legendContactUs">
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label><br/>
                            <input  className="text"  type="text" name="from_name"  placeholder="Name"  /><br/>
                            <label>Email</label><br/>
                            <input  className="text"  type="email" name="from_email" placeholder="Email" /><br/>
                            <label>Message</label><br/>
                            <textarea  className="textArea" name="message" placeholder="Message" /><br/>
                            <input type="submit" value="Send" className="contactMebtn" /><br/>
                        </form>
                    </legend>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default  ContactMe;