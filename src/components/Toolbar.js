import React from 'react'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import '../css/App.css'

function nav() {
return (
    <div className="nav center">
      <Link 
        to ="about"
        spy={true} smooth={true} duration={500}  
        className="box">
        <span role="img" aria-label="woman">👩</span>
        about
      </Link>

      <a href="#experience" className="box">
        <span role="img" aria-label="Suitcase">💼</span>
        experience
      </a>

      <a href="#projects" className="box">
        <span role="img" aria-label="Laptop">💻</span>
        projects
      </a>
          
      <a href="#skills" className="box">
        <span role="img" aria-label="Trophy">🏆</span>
        skills
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