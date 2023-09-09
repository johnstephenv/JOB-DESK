import React from 'react'
import { NavLink } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
const Header = () => {
  return (
    <>
    <header class="header-top-strip py-15 ">
      <div class="container-xxl">
        <div class="row">
          <div class="col-6">
            <div class="header-top-data d-flex gap-30 align-items-center">
            <img src=""/>
            
            <h1 class="text-white dark ">JOB DESK</h1>
            </div>
           
          </div>


          
          <div class="col-6">
            <p class="text-end text-white dark">
              Ph no:
               <a>+91 9600046031</a> <br />
               <a>Email Id:vjs03096000@gmail.com</a> 
               <p class="text-end text-white dark">
               
               </p>
            </p>
          </div>
        </div>
      </div>
      </header>
      <header class="header-upper py-1">
        <div class="container-xxl">
          <div class="row align items-center">
            <div class="col-2">
            
            </div>
            
              <div class="col-5">
              <div class="input-group ">
                <input type="text" class="form-control" 
                   placeholder="Search here" 
                   aria-label="Search here"
                   aria-describedby="basic-addon2"/>
                <span class="input-group-text p-3" id="basic-addon2">
                  <BsSearch />
                </span>
                </div>
              </div>
              <div class="col-5"> 
              <div class="header-upper-links d-flex align-items-center justify-content-between">
               
                
                
                
                </div>    
            </div>    
          </div>
        </div>
      </header>
      <header class="header-bottom py-3">
        <div class="container-xxl">
          <div class="row">
            <div class="col-12">
              <div class="menu-bottom d-flex align-items-center">
                <div></div>
                <div class="menu-links">
                  <div class="d-flex align-items-center gap-15">
                  <NavLink to="/">HOME</NavLink>
                  <NavLink to="/"> CONTACT</NavLink>
                  <NavLink to="/">ABOUT US</NavLink>
                  <NavLink to="/">SERVICE</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </header>
      </>
  )
}

export default Header;
