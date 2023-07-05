import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import './ContactMe.css';

function ContactMe(){
    return(
        <div>
            <NavBar/>
            <div className="ContactMeDiv">
                <div  data-aos="zoom-in" data-aos-easing="linear"className="contact">
                    <legend className="legendContactUs">
                        <form className="formContactUs">
                                <label>Name</label><br/>
                                <input className="text" type="text" placeholder="name" /><br/>
                                <label>Email</label><br/>
                                <input className="text"  type="text" placeholder="Email"/><br/>
                                <label>Reason For Contact</label><br/>
                                <input className="text"  type="text" placeholder="Reason for Contact"/><br/>
                                <div className="contactMebtn">Contact Me</div>
                        </form>
                    </legend>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default  ContactMe;