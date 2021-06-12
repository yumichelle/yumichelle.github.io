import React from 'react'
import { Link } from 'react-scroll'
import '../css/App.css'

function nav() {
return (
    <div className="nav center">
      <Link 
        to ="about"
        spy={true} smooth={true} duration={500}  
        className="box">
        <p role="img" aria-label="woman">👩</p>
        about
      </Link>

      <Link 
        to ="experience"
        spy={true} smooth={true} duration={500}  
        className="box">
        <p role="img" aria-label="Suitcase">💼</p>
        experience
      </Link>

      <Link 
        to ="projects"
        spy={true} smooth={true} duration={500}  
        className="box">
        <p role="img" aria-label="Laptop">💻</p>
        projects
      </Link>
          
      <Link 
        to ="skills"
        spy={true} smooth={true} duration={500}  
        className="box">
        <p role="img" aria-label="Trophy">🏆</p>
        skills
      </Link>

      <a href="https://www.notion.so/yumichelle/Tech-Journal-b594792ed67f433f87c6cf9d34963ddc" className="box">
        <p role="img" aria-label="Notebook">📓</p> 
        tech notes
      </a>

      <a href="https://www.notion.so/Photo-Journal-5b88f5cb632e44478bb6d380b6cf6643" className="box">
        <p role="img" aria-label="Camera">📸</p> 
        photos
      </a>
    </div>
  )
}

function Toolbar(){
  return (
    nav()
  )
}

export default Toolbar