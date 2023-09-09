import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from "react-icons/bs";
import {BsInfoCircle} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
    <footer class="py-4">
    <div class="container-xxl">
      <div class="row align-items-center">
        <div class="col-5">
          <div class="footer-top-data d-flex gap-30 align-items-center">
           <BsInfoCircle class="mb-0 text-white" />
           
            <h2 class="mb-0 text-white">Sign Up for more updates</h2>
            
          </div>
        </div>
           <div class="col-7">
             <div class="input-group">
                   <input type="text" class="form-control" aria-describedby="basic-addon2"/>
                   <span class="input-group-text p-3" id="basic-addon2">Sign Up</span>
          </div>
       </div>
      </div>
    </div>
    </footer>
    <footer class="py-3">
      <div class="container-xxl">
        <div class="row">
          <div class="col-4">
            <h4 class="text-white mb-4">Contact Us</h4>
            
               <div>
                <address class="text-white mb-4" >18/72 Sathyapuram 2nd Street <br/>Ambattur,Chennai-53 <br/> TamilNadu
                </address>
                <a href="tel: +91 8765098723" class="text-white mb-4" >
                  +91 9600046031
                </a>
                <br/>
                <a class="text-white mb-4"> 
                Email Id:vjs0938df@gmail.com</a>
                <div class="social_icons d-flex align-items-center gap-30">
                </div>
               </div>
          </div>
          <div class="col-3">
          <h4 class="text-white mb-4">Connect with us</h4>
          <div class="social_icons d-flex align-items-center gap-30">
                  <a href="">
                    <BsLinkedin  class="text-white mb-4" />
                  </a>
                  <a href="">
                  <BsGithub  class="text-white mb-4" />
                  </a>
                  <a href="">
                  <BsInstagram  class="text-white mb-4"/>
                  </a>
                  <a href="https://www.youtube.com/">
                  <BsYoutube  class="text-white mb-4" />
                  </a>
                  
                </div>
          </div>
          <div class="col-2">
          <h4 class="text-white mb-4">Account</h4>
          <div class="footer-links d-flex flex-column">
              <Link class="text-white py-2 mb-1">Employer Login</Link>
              <Link class="text-white py-2 mb-1">Employee</Link>
              <Link class="text-white py-2 mb-1"></Link>
              <Link class="text-white py-2 mb-1"></Link>
            </div>
          </div>
          <div class="col-2">
          <h4 class="text-white mb-4">Quick links</h4>
          <div class="footer-links d-flex flex-column">
              <Link class="text-white py-2 mb-1">Employer desk</Link>
              <Link class="text-white py-2 mb-1">Employee desk</Link>
              <Link class="text-white py-2 mb-1"></Link>
              <Link class="text-white py-2 mb-1"></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer class="py-4">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <p class="text-center text-white dark"> &copy;  {new Date().getFullYear()}; Powered by VJS</p>
        </div>
      </div>
    </div>
    </footer>
    </>
    
   
  )
}

export default Footer