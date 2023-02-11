import React, { useState,useContext } from 'react'
import Apicontext from '../context/Apicontext'

function Footer() {
    let {postcomplaint}=useContext(Apicontext)
    const [emailforcomplaint,setemailforcomplaint]=useState("");
    const [name,setname]=useState("");
    const [descriptioncomplaint,setdescriptioncomplaint]=useState("");
    const token=localStorage.getItem('token');
    const handlesubmitcomplaint=async(event)=>{
        event.preventDefault();
        console.log("sujal");
        console.log(name);
        console.log(emailforcomplaint);
        console.log(descriptioncomplaint);
        console.log(token);
        if(token===null){
              document.getElementById('errormsg').style.display="block";
        }
        else{
            const response=await postcomplaint(name,emailforcomplaint,descriptioncomplaint);
            console.log("sahu")
            console.log(response);
        }
    }
  return (
    <div>
         <div class={`alert alert-danger`} id="errormsg" style={{ display: "none", textAlign: "center",position:"fixed",top:"0px",width:"100%" }} role="alert">
                You have required to Sign up before sending any complaint to admin.
            </div>
      <footer /*style={{position:"relative",bottom:"0"}}*/>
            <div className="a_container">
                <div className="a_left">
                    <h2>About Us</h2>
                    <div className="a_content">
                        <p>Well it is as easy as doing a google search. <br/> If you just want to know
                            about
                            various grants available in your research field you can directly type it under the heading
                            "keyword" and our flawless search algorithm will find the best grant available to help you
                            in your research. After pressing search button, you will find all the available grants below
                            the page where you will be given basic details like who is providing the grant, when it was
                            posted, the last date and the amount. If you find any of the grant which fits best for you,
                            you can click on apply now/read more to move further ahead in the process.
                        </p>
                        <div className="a_social_icon">
                            <a href="#"><span className="fa-brands fa-facebook"></span></a>
                            <a href="#"><span className="fa-brands fa-twitter"></span></a>
                            <a href="#"><span className="fa-brands fa-instagram"></span></a>
                            <a href="#"><span className="fa-brands fa-linkedin"></span></a>
                        </div>
                    </div>
                </div>

                <div className="a_right">
                    <h2 className='sfooterh2'>Complaint Us</h2>
                    <div className="a_content">
                        <form action="#">
                            <div className="a_name">
                                <div className="text">Your Name</div>
                                <input type="text" onChange={(event)=>{event.preventDefault();setname(event.target.value)}} required/>
                            </div>
                            <div className="a_email">
                                <div className="text">Email </div>
                                <input type="email" id="emailfield" onChange={(event)=>{event.preventDefault();setemailforcomplaint(event.target.value)}} required/>
                            </div>
                            <div className="a_complaint">
                                <div className="text">Your Complaint</div>
                                <textarea cols="25" rows="2"  onChange={(event)=>{event.preventDefault();setdescriptioncomplaint(event.target.value)}} required></textarea>
                            </div>
                            <div className="a_btn">
                                <button type="submit" onClick={handlesubmitcomplaint}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="container-fluid py-4 px-sm-3 px-md-5">
            <p class="m-0 text-center">
                &copy; <a class="font-weight-semi-bold" href="#">GrantX</a>. All Rights Reserved.

            </p>
        </div>
        </footer>
    </div>
  )
}

export default Footer
