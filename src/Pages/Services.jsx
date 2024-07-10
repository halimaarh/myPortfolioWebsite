import { FaPaintBrush } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdDeveloperMode } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";
import Layoutone from "../Layout/Layoutone";
function Services() {
  return (
    <div>
        <Layoutone/>
        <div className='services'>
            <h1 className="heading">My Services</h1> 
        
            <div className="services-content"> 
                <div className="row"> 
                    <div className="column"> 
                        <div className="card"> 
                            <div class="icon"> 
                                <FaPaintBrush/>
                            </div> 
                            <h3 className="greet-heading">Web Design</h3> 
                            <p className="paragraph"> 
                                Web development refers to the creating, 
                                building, and maintaining 
                                of websites. It includes aspects such as 
                                web design, web publishing, 
                                web programming, and database management. 
                                It is the creation of an 
                                application that works over the internet 
                                i.e. websites. 
                            </p> 
                        </div> 
                    </div> 
                    <div className="column"> 
                        <div className="card"> 
                            <div className="icon"> 
                            <MdDeveloperMode/>
                            </div> 
                            <h3 className="greet-heading"> 
                                front-end Development 
                            </h3> 
                            <p className="paragraph"> 
                                Front-end development refers to the practice of creating the visual 
                                and interactive parts of a website or web application 
                                that users interact with directly. 
                                It involves using languages like HTML, CSS,
                                and JavaScript to design and build the user interface (UI) 
                                and user experience (UX) components.
                            </p> 
                        </div> 
                    </div>  
                </div>

                <div className="row"> 
                    <div className="column"> 
                            <div className="card"> 
                                <div class="icon"> 
                                    <TbBrandJavascript/>
                                </div> 
                                <h3 className="greet-heading"> 
                                    back-end Development 
                                </h3> 
                                <p className="paragraph"> 
                                    Back-end development involves creating and maintaining the server-side logic 
                                    and databases that enable the front-end of a website 
                                    or application to function. 
                                    Back-end developers primarily work with server-side languages like Python, 
                                    Java, Ruby, PHP, or Node.js, as well as databases like MySQL,
                                    PostgreSQL, MongoDB, etc. They handle tasks such as server management, 
                                    database integration, API development, 
                                    and ensuring the application's overall functionality, security, 
                                    and performance.
                                </p> 
                            </div> 
                        </div> 
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Services