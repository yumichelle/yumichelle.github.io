import React, { Component } from 'react';

class ProjCard extends Component{
  constructor(props){
    super(props);
    this.state={show:true}
    this.toggleDiv = this.toggleDiv.bind(this)
  }
  toggleDiv = () => {
    const show = this.state
    this.setShow({show: !show})
  }
 

 Hide(props){
  
    return(
      <div class="content">
        <div>
          {props.skillsList}
        </div>
        <div class="bottomright">❎</div>
      </div>
    )

}

 Show (props){

    return(
  <div  class="content">
    <h1>
      {props.title}
    </h1>
    {props.descript}
    <div class="bottomright">➡️</div>
  </div>
  )
}


  var output = this.props.projArr.map(item =>    {<div class="content projContainer" onClick={this.toggle}>
        {this.state.show && this.props.projArr.map(this.Show)}
        {!this.state.show && this.props.projArr.map(this.Hide)}
      </div>})

 render(){
    return(
   
    );
  }

}

export default ProjCard;


// ==============================
// import React from 'react';
// import URL from './images/url.png';
// import './App.css'

// const projArr = [
//   {
//     id: 1,
//     title: 'Anime Recommendation System',
//     descript: 'recommends anime based on a comparison between the ratings and the content of other anime.',
//     skillsList: 'python, flask'
//   },
//   {
//     id: 2,
//     title: 'Frobbozz Magic Pancake House',
//     descript: 'Implemented an algorithm for a back-end program in Java that aids a waitress in stacking the pancakes correctly so burned sides are facing down.',
//     skillsList: 'Java'
//   }
// ]

// function Front(props) {
//   const titleDescript = props.cards.map(
//     (dc) =>
//       <div key={dc.id}>
//         <h3> {dc.title}</h3>
//         {dc.descript}
//       </div>
//   )

//   return (
//     <div>
//       {titleDescript}
//     </div>
//   )
// }

// function Back(props) {
//   const skills = (
//     <ul>
//       {props.cards.map(
//         (dc) =>
//           <p key={dc.id}> {dc.skillsList} </p>
//       )}
//     </ul>
//   )
//   return (
//     <div>
//       {skills}
//       <br />
//       <a href="https://github.com/yumichelle/Anime-Recommendation-System" class="bottomleft">
//         <img src={URL} width="30" height="30" alt="url" />
//       </a>
//     </div>
//   )
// }


// function Projects() {

//   return (
//     <div>
//       <div class="content projcontainer" onClick="">
//         <Front cards={projArr}/>
//         <Back cards={projArr} />
//       </div>
//     </div>
//   )
// }


// export default Projects


=================================
import React from "react";
import URL from "./images/url.png";
import "./App.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.toggleDiv = this.toggleDiv.bind(this);
  }
  toggleDiv = () => {
    const show = this.state;
    this.setShow({ show: !show });
  };

  render() {
    var projectsOpentag = "<projects>";
    var projectsClosetag = "</projects>";
    return (
      <div id="projects" style={{ padding: "30px" }}>
        {projectsOpentag}
        <div id="wrap">
          <div class="content projContainer" onClick={this.toggle}>
            {this.state.show && <Show title="anime" descript= 'recommends anime based on a comparison between the ratings and the content of other anime.' />}
            {!this.state.show && <Hide skillsList= 'python, flask' />}
          </div>
        </div>
        {projectsClosetag}
      </div>
    );
  }
}

class Hide extends React.Component {
  render() {
    return (
      <div class="content">
        <div>{this.props.skillsList}</div>
        <div class="bottomright">❎</div>
      </div>
    );
  }
}

class Show extends React.Component {
  render() {
    return (
      <div class="content">
        <h1>{this.props.title}</h1>
        {this.props.descript}
        <div class="bottomright">➡️</div>
      </div>
    );
  }
}
export default Projects;



// =============================
// import React from "react";
// import URL from "./images/url.png";
// import "./App.css";

// class Projects extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: true };
//     this.toggleDiv = this.toggleDiv.bind(this);
//   }
//   toggleDiv = () => {
//     const {show} = this.state;
//     this.setState({ show: !show });
//   };

//   render() {
//     var projectsOpentag = "<projects>";
//     var projectsClosetag = "</projects>";
//     return (
//       <div style={{ padding: "30px" }}>
//         {projectsOpentag}
//         <div id="wrap2">

//           <div class="content projcontainer" onClick={this.toggleDiv}>
//             {this.state.show && <Show title="Anime Recommendation System" descript= 'recommends anime based on a comparison between the ratings and the content of other anime.' />}
//             {!this.state.show && <Hide skillsList= 'python, flask' url='https://github.com/yumichelle/Anime-Recommendation-System' />}
//           </div>

//           <div class="content projcontainer" onClick={this.toggleDiv}>
//             {this.state.show && <Show title="Frobbozz Magic Pancake House" descript= 'Implemented an algorithm for a back-end program in Java that aids a waitress in stacking the pancakes correctly so burned sides are facing down.' />}
//             {!this.state.show && <Hide skillsList= 'Java' url='https://github.com/yumichelle/Frobbozz-Magic-Pancake-House'  />}
//           </div>

//           <div class="content projcontainer" onClick={this.toggleDiv}>
//             {this.state.show && <Show title="got-to-go" descript= ' Utilized Google Cloud Platform in a team of three to create a web app that aids people to easily find public restroom facilities catering to their needs.' />}
//             {!this.state.show && <Hide skillsList= 'HTML, CSS, JavaScript' url='https://github.com/yumichelle/got-to-go' />}
//           </div>

//         </div>
//         {projectsClosetag}
//       </div>
//     );
//   }
// }

// class Hide extends React.Component {
//   render() {
//     return (
//       <div class='content'>
//         <div>{this.props.skillsList}</div>
//         <a href={this.props.url} class='bottomleft'>
//           <img src={URL} width='30' height='30' alt='url' />
//         </a>
//         <div class='bottomright'>❎</div>
//       </div>
//     );
//   }
// }

// class Show extends React.Component {
//   render() {
//     return (
//       <div class="content">
//         <h1>{this.props.title}</h1>
//         {this.props.descript}
//         <div class="bottomright">➡️</div>
//       </div>
//     );
//   }
// }
// export default Projects;


<Show 
              title="Anime Recommendation System" 
              descript= 'recommends anime based on a comparison between the ratings and the content of other anime.' 
              skillsList= {[{"id":"1", "tool":"python"}, {"id":"2", "tool":"jupyter notebook"}]}
              url='https://github.com/yumichelle/Anime-Recommendation-System' />