import React from 'react'
import '../css/App.css'
import Linkedin from '../images/linkedin.svg'
import Email from '../images/email.svg'
import Github from '../images/github.svg'
import Instagram from '../images/instagram.svg'

function SocialBar(){
  return(
    <div style={{display: "initial"}}>
      <ul class="sidebar">

        <li class="tooltip">
          <a href="https://www.linkedin.com/in/ymichelle">
            <img src={Linkedin} width="50" height="50" alt="linkedin" class="contrast" />
          </a>
          <span> LinkedIn </span>
        </li>

        <li class="tooltip">
          <a href="https://www.notion.so/yumichelle/Contact-Form-37bbaf465f9c420d93524cd2f2204a64">
            <img src={Email} width="50" height="50" alt="email" class="contrast" />
          </a>
          <span> Contact Me </span>
        </li>

        <li class="tooltip">
          <a href="https://github.com/yumichelle">
            <img src={Github} width="50" height="50" alt="github" class="contrast" />
          </a>
          <span> GitHub </span>
        </li>

        <li class="tooltip">
          <a href="https://www.instagram.com/yuwhomi/">
            <img src={Instagram} width="50" height="50" alt="instagram" class="contrast"/>
          </a>
          <span> Instagram </span>
        </li>
        
      </ul>
    </div>
  )
}

export default SocialBar