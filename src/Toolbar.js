import React from 'react'
import './App.css'

function nav() {
return (
    <div className="nav center">
      <a href="./src/About/#about" className="box">
        <span role="img" aria-label="woman">👩</span>
        about
      </a>

      <a href="./src/Experience/#experience" className="box">
        <span role="img" aria-label="Suitcase">💼</span>
        experience
      </a>

      <a href="./src/Projects/#projects" className="box">
        <span role="img" aria-label="Laptop">💻</span>
        projects
      </a>
          
      <a href="./src/Skills/#skills" className="box">
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