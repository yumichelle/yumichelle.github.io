// refernced React Toggle Switch - Day & Night Mode Tutorial 🌓
//https://www.youtube.com/watch?v=IiUg-2dAd4A
import React from 'react';
import './toggle.css';

function myFunction() {
   var element = document.body;
   element.classList.toggle("darkmode");
}

export default function Toggle({ toggled, onClick }) {
  return (
    <div>
      <button onclick="myFunction()">Toggle dark mode</button>
      <p>--hi</p>
    </div>
  );
}
/**
 * 
 * <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`} for="themeSwitchToggle">
 * 
 <input class="theme-switch_toggle" id="themeSwitchToggle" type="checkbox">
      <label class="theme-switch_label" for="themeSwitchToggle"></label>
 * 
 * 
 * 
       <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`} >
        <input class="theme-switch_toggle" id="themeSwitchToggle" type="checkbox" />
        <label class="night notch" for="themeSwitchToggle"></label>
          <div className="notch"/>
          <div className="shape sm" />
          <div className="shape md" />
          <div className="shape lg" />
      
      </div>
*/