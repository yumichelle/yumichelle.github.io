import React from 'react'
import '../css/App.css'
import Toolbar from './Toolbar'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import SocialBar from './SocialBar'


function App() {
  return (
    <div style={{position: "relative"}}>
      <div  class="column left"> 
        <Toolbar class="center" />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
      <SocialBar />
    </div>
  )
}


export default App


//   const [toggled, setToggled] = React.useState(false);
//   const handleClick = () => {
//     setToggled((s) => !s);
//   };
// <Toggle toggled={toggled} onClick={ handleClick } />




