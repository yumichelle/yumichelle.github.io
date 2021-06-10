import React from 'react'

function Experience(){
  var experienceOpentag = "<experience>"
  var experienceClosetag = "</experience>"
  return (
    <div id="experience" style={{padding:"30px"}}>
      {experienceOpentag}

      <div class="horibar" id="flipped">
       <div id="wrap"> 
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
    </div>
  )
}

export default Experience