import Footer from "../Components/Footer";
import Layoutone from "../Layout/Layoutone";

function Contact(props) {
    const {label} = props;
  return (
    <div>
        <Layoutone/>
        <div className='contact'>
            <div>  
                <h1 className="heading">Contact Me</h1> 
            </div>
            
            <div className="content"> 
                <div className="form-container"> 
                    <h1 className="main-heading">Get In Touch</h1>
                    <div className="contact-form">
                        <label>{label}</label>
                        <input className="form" type="text" placeholder="Your Name"/>  
                        <label>{label}</label>
                        <input className="form" type="text" placeholder="Your Email"/> 
                        <label>{label}</label>
                        <input className="form" type="text" placeholder="Your Phone"/> 
                        <label>{label}</label>
                        <textarea className="form"
                            placeholder="Write your message" name="message" cols="30" rows="10"> 
                        </textarea> 
                        <input className="form-btn" type="submit" value="Send Message"/>
                    </div>
                </div>

                <div className="contact-details"> 
                    <h1 className="main-heading">My Contact Details</h1> 
                    <div className="details"> 
                        <h5 className="contact-heading">EMAIL</h5> 
                        <p className="contact-text">shifatuhalimah20@gmail.com</p> 
                    </div> 
                    <div className="details"> 
                        <h5 className="contact-heading">PHONE</h5> 
                        <p className="contact-text">08100558639</p> 
                    </div> 
                    <div className="details"> 
                        <h5 className="contact-heading">ADDRESS</h5> 
                        <p className="contact-text">24, ROOM9</p> 
                        <p>RABIATU THOMPSON CRESCENT</p> 
                        <p>SURULERE, LAGOS</p> 
                    </div> 
                </div> 
            </div> 
        </div>
        <Footer/>
    </div>
  )
}

export default Contact;