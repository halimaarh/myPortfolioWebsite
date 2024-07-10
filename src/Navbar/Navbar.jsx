import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div class="navbar">
        <div class="logo"> 
                <h2 class="logo-heading">Shifatu Halimah</h2> 
            </div> 
            {/* <div class="hamburger" id="hamburger"> 
                <i class="fas fa-bars hamburger-icon"></i> 
                <i class="fas fa-times cross-icon"></i> 
            </div>  */}
            <div class="menu"> 
                <ul class="menu-list"> 
                    <li class="items"> 
                        <a class="links" href="#home"> 
                            Home 
                        </a> 
                    </li> 
                    <li class="items"> 
                        <a class="links" href="#portfolio"> 
                            Portfolio 
                        </a> 
                    </li> 
                    <li class="items"> 
                        <a class="links" href="#about"> 
                            About 
                        </a> 
                    </li>
                    <li class="items"> 
                        <a class="links" href="#services"> 
                            Services 
                        </a> 
                    </li> 
                    <li class="items"> 
                        <a class="links" href="#contact"> 
                            Contact Me 
                        </a> 
                    </li> 
                </ul> 
            </div> 
    </div>
  )
}

export default Navbar;