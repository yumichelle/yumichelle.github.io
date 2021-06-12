import React from 'react'
import Linkedin from '../images/linkedin.svg'
import Email from '../images/email.svg'
import Github from '../images/github.svg'
import Instagram from '../images/instagram.svg'

function Footer(){
    return(
        <div class = "center"
          style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"}} >
            <small class = "col-8"> <b>
              Designed & Developed by Michelle Yu 👩‍💻 <br />
              &copy; Copyright {(new Date().getFullYear())} 
            </b></small>
            <div class = "col-4">
                <a href="https://www.linkedin.com/in/ymichelle">
                    <img src={Linkedin} width="30" height="30" alt="linkedin" class="contrast" style={{margin: "3px"}} />
                </a>
                <a href="mailto:michelle.yu@techtogether.io">
                    <img src={Email} width="30" height="30" alt="email" class="contrast" />
                </a>
                <a href="https://github.com/yumichelle">
                    <img src={Github} width="30" height="30" alt="github" class="contrast" style={{margin: "3px"}} />
                </a>
                <a href="https://www.instagram.com/yuwhomi/">
                    <img src={Instagram} width="30" height="30" alt="instagram" class="contrast"/>
                </a>
            </div>
        </div>
    )
}

export default Footer