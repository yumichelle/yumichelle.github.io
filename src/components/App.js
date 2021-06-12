import React from 'react'
import '../css/App.css'
import Toolbar from './Toolbar'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import SocialBar from './SocialBar'
import Footer from './Footer'

function App() {
  return (
    <div>
      <div class="col-11">
        <Toolbar class="center" />
        <About />
        <Experience />
        <Projects />
        <Skills /> 
        <SocialBar /> 
        <Footer />
      </div> 
    </div>
  )
}


export default App


//   const [toggled, setToggled] = React.useState(false);
//   const handleClick = () => {
//     setToggled((s) => !s);
//   };
// <Toggle toggled={toggled} onClick={ handleClick } />




