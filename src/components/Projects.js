import React from 'react'
import { Element } from 'react-scroll'
import URL from '../images/url.png'
import '../css/App.css'

class Projects extends React.Component {

  render() {
    var projectsOpentag = "<projects>"
    var projectsClosetag = "</projects>"
    return (
      <Element style={{ marginLeft: "30px"}}>
        {projectsOpentag}
        <div>

          <div class="content projcontainer scrollbar" onClick={this.toggleDiv}>
            <Show 
              title="Anime Recommendation System" 
              descript= "Recommends anime based on a comparison between the ratings and the content of other anime." 
              skillsList= {["pandas", "sklearn", "scikit-image", 
                            "numpy", "csr_matrix", "pickle", 
                            "NearestNeighbors", "TfidfVectorizer", 
                            "sigmoid_kernel", "Jupyter Notebook",
                            "Flask", "Heroku"
              ]}
              url="https://github.com/yumichelle/Anime-Recommendation-System" />
          </div>

          <div class="content projcontainer scrollbar" onClick={this.toggleDiv}>
            <Show 
              title="Frobbozz Magic Pancake House" 
              descript= "Implemented an algorithm for a back-end program in Java that aids a waitress in stacking the pancakes correctly so burned sides are facing down." 
              skillsList= {["Java"]} 
              url="https://github.com/yumichelle/Frobbozz-Magic-Pancake-House" />
          </div>

          <div class="content projcontainer scrollbar" onClick={this.toggleDiv}>
            <Show 
              title="got-to-go" 
              descript= "Utilized Google Cloud Platform in a team of three to create a web app that aids people to easily find public restroom facilities catering to their needs."
              skillsList= {["HTML", "CSS", "JavaScript"]}
              url="https://github.com/yumichelle/got-to-go" />
          </div>

        </div>
        {projectsClosetag}
      </Element>
    );
  }
}

class Show extends React.Component {
  constructor(props){
    super(props)
    this.state={show: true}
    this.toggleHidden = () => this.setState(
      (prevState) => ({show: !prevState.show})
    )
  }

  render() {  
    var out= (this.props.skillsList).map(item => <span class="skill">{item}</span>)

    return (
      <div id="projects" class="content">
        <h3>{this.props.title}</h3>
        <div onClick={this.toggleHidden}>
          <div class="bottomright">
            <span role="img" aria-label="arrow">➡️</span>
          </div>
        </div>

        {!this.state.show && 
          <div>     
            {out}
            <a href={this.props.url} class="bottomleft"> <img src={URL} width="30" height="30" alt="url" /> </a>
          </div>
        }
        
        {this.state.show && 
          <div onClick={this.toggleHidden}>
            <p> {this.props.descript} </p>
          </div>
        }
      </div>
    )
  }
}

export default Projects