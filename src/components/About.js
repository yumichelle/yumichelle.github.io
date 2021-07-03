import React from 'react'
import { Element } from 'react-scroll'

function About() {
  var aboutOpentag = "<about>"
  var aboutClosetag = "</about>"

  return (
    <Element id="about" style={{padding:"30px"}} >
      {aboutOpentag}
      <h2>Hello,</h2>
      <span role="img" aria-label="tea">🍵</span> Name: michelle.
      <br />
      <span role="img" aria-label="sprout">🌱</span> I’m currently learning data structures and algorithms.
      <br />
      <span role="img" aria-label="book">📖</span> I’m currently reading <a href="https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850">Cracking the Coding Interview</a> and <a href="https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680178/ref=sr_1_3?dchild=1&keywords=Rich+Dad%2C+Poor+Dad&qid=1622776205&s=books&sr=1-3">Rich Dad, Poor Dad</a>.
      <br />
      <span role="img" aria-label="speech">💬</span> Ask me about anime and manga recommendations! i've read over 300 manga (´-`)
      <br />
      <span role="img" aria-label="smile">😄</span> Pronouns: she / her.
      <br />
      <span role="img" aria-label="thunder">⚡</span> Fun fact: i'm left-handed.
      <br />
      {aboutClosetag}
    </Element>
  );
}

export default About;