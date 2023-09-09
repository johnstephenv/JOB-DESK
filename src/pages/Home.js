import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <section class="home-wrapper-1 py-5" >
      <div class="container-xxl">
        <div class="row">         
            <h4 class="text"> Welcome to JOB DESK We're thrilled to have you as part of our website!!</h4>
            <div class="main-banner position-relative p-3">
            <div class="d-flex flex-wrap gap-15 justify-content-between align-items-center">
           
              <img src="images/jobe.jpg"   class="rounded-circle" alt="Cinque Terre" width="1300" height="700"/>
             <div> 
              <h1 class="text"> EMPLOYEE DESK</h1> 
              <h4 class="text"> Many labor of daily wages couldn’t find job in long range and so our website helps them to search job they need and the place they can go.
                                This platform is designed to make your journey for searching jobs you want possible.Check out the latest jobs here.A desk calendar with important company dates, holidays, and events can help the employee stay organized and informed is available here.</h4>
               <Link class="button"  >LOGIN</Link> 
               </div> 
            </div>
            </div>
            
          
            
              
              
            
              
              <div class="main-banner  position-relative p-3">
              <div class="d-flex flex-wrap gap-15 justify-content-between align-items-center">
              
              <img src="images/emp.jpg"  class="rounded-circle" alt="Cinque Terre" width="1300" height="700"/>
              <div>
              <h1 class="text"> EMPLOYER DESK</h1> 
              <h4 class="text"> Though the companies get labor they are not suited for the work the company wants from them. This is solved here by selecting labors from under various categories of job they do from our website.Describe your job here and get desired labours and save your money and time.
              </h4>
              <Link class="button"  >LOGIN</Link> 
              </div>
              </div>
              
            </div>
            </div>
        
      </div>
      </section>
      </>
  )
}

export default Home