import React from 'react'
import { Element } from 'react-scroll'

function Experience(){
  var experienceOpentag = "<experience>"
  var experienceClosetag = "</experience>"
  return (
    <Element id="experience" style={{padding:"30px"}}>
      {experienceOpentag}

      <div class="horibar" id="flipped">
       <div id="wrap"> 

          <div class="content" id="flipped">
            <p>
              <b>
                Software Engineer Intern
              </b>
              <h4>
                @ TargetSmart
              </h4>
              2021 - 2021
            </p>
          </div>

          <div class="content" id="flipped">
            <p>
              <b>
                Technical Director, Technical Member 
              </b>
              <h4>
                @ TechTogether NY
              </h4>
              2020 - 2021
            </p>
          </div>

          <div class="content" id="flipped">
            <p>
              <b>
                Data Science Fellow
              </b>
              <h4>
                @ CUNY Tech Prep
              </h4>
              2020 - 2021
            </p>
          </div>

          <div class="content" id="flipped">
            <p>
              <b>
                Teaching Assistant 
              </b>
              <h4>
                @ Upperline Code
              </h4>
              2020 - 2020
            </p>
          </div>
          
          <div class="content" id="flipped">
            <p>
              <b>
                Aide 
              </b>
              <h4>
                @ ITS Help Desk
              </h4>
              2020 - 2020
            </p>
          </div>

          <div class="content" id="flipped">
            <p>
              <b>
                Facilitator 
              </b>
              <h4>
                @ Girls Who Code
              </h4>
              2019 - 2020
            </p>
          </div>

          <div class="content" id="flipped">
            <p>
              <b>
                Aide 
              </b>
              <h4>
                @ Tech Incubator 
              </h4>
              2019 - 2019
            </p>
          </div>

          <div class="content" id="flipped">
            <p>
              <b>
                Engineering Intern 
              </b>
              <h4>
                @ Bitly
              </h4>
              2019 - 2019
            </p>
          </div>
        </div>
      </div>
      
      {experienceClosetag}
    </Element>
  )
}

export default Experience