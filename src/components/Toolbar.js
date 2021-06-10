import React from 'react'
// import { Link } from 'react-router-dom'
import '../css/App.css'

function nav() {
return (
    <div className="nav center">
      <a href ="#about" className="box">
        <span role="img" aria-label="woman">👩</span>
        about
      </a>

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