import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram ,  FaLinkedinIn} from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <div className='footer'>
         <div className="footer-content text-center"> 
            <h4> 
                Copyright © 2023 All rights reserved | 
                This portfolio website template is created 
                by me. 
            </h4> 
            <div class="social-links"> 
                <div class="footer-menu"> 
                    <ul class="footer-menu-list"> 
                        <li class="footer-list-items"> 
                            <a class="footer-links" href="#"> 
                            <FaFacebookF/>
                            </a> 
                        </li> 
                        <li class="footer-list-items"> 
                            <a class="footer-links" href="#"> 
                               <FaInstagram/>
                            </a> 
                        </li> 
                        <li class="footer-list-items"> 
                            <a class="footer-links" href="#"> 
                                <FaLinkedinIn/>
                            </a> 
                        </li> 
                        <li class="footer-list-items"> 
                            <a class="footer-links" href="#"> 
                                <FaTwitter/>
                            </a> 
                        </li> 
                        <li class="footer-list-items"> 
                            <a class="footer-links" href="#"> 
                                <IoLogoWhatsapp/>
                            </a> 
                        </li> 
                    </ul> 
                </div> 
            </div> 
        </div> 
    </div>
  )
}

export default Footer;