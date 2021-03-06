import React from 'react'
import { Element } from 'react-scroll'

function About() {
  var aboutOpentag = "<about>"
  var aboutClosetag = "</about>"

  return (
    <Element id="about" style={{padding:"30px"}} >
      {aboutOpentag}
      <h2>Hello,</h2>
      <span role="img" aria-label="tea">๐ต</span> Name: michelle.
      <br />
      <span role="img" aria-label="sprout">๐ฑ</span> Iโm currently learning data structures and algorithms.
      <br />
      <span role="img" aria-label="book">๐</span> Iโm currently reading <a href="https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850">Cracking the Coding Interview</a> and <a href="https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680178/ref=sr_1_3?dchild=1&keywords=Rich+Dad%2C+Poor+Dad&qid=1622776205&s=books&sr=1-3">Rich Dad, Poor Dad</a>.
      <br />
      <span role="img" aria-label="speech">๐ฌ</span> Ask me about anime and manga recommendations! i've read over 300 manga (ยด-`)
      <br />
      <span role="img" aria-label="smile">๐</span> Pronouns: she / her.
      <br />
      <span role="img" aria-label="thunder">โก</span> Fun fact: i'm left-handed.
      <br />
      {aboutClosetag}
    </Element>
  );
}

export default About;