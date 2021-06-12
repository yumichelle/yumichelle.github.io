import React from 'react'
import { Element } from 'react-scroll'

var skillsArr = [
  "HTML", 
  "CSS", 
  "Java",
  "T-SQL", 
  "Python", 
  "Bootstrap", 
  "React", 
  "pandas", 
  "numpy", 
  "sklearn", 
  "matplotlib", 
  "seaborn",
  "Amazon Web Services (uncertified AWS)",
  "GIT",
  "CodePath iOS Application Development (Dec. 2019)"
]

function Front(props) {
  const titleDescript = props.cards.map(
    (dc) => <span class="skill"> {dc} </span>
  )
  return (
    <div>
      {titleDescript}
    </div>
  )
}

function Skills(){
  var skillsOpentag  = "<skills>"
  var skillsClosetag = "</skills>"
  return(
    <Element id="skills" style={{padding: "30px"}}>
      {skillsOpentag}
      <Front cards={skillsArr}/>
      {skillsClosetag}
    </Element>
  )
}

export default Skills