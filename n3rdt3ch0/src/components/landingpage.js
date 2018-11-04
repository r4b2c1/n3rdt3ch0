import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
      return(
         
          <div style={{width: '100%', margin: 'auto'}}>
         <Grid className="Landing-grid">
          <Cell col={12}>
          <div className="banner-text">
          <h1 >Full Stack Web Developer</h1>

       <hr/>

       <p>Front-End:
       Web fundamentals like HTML | JavaScript and CSS |
       CSS preprocessors like Sass or Less
       JavaScript framworks like AngularJS | React | or Ember etc. JS-Base build tools like Grunt | Gulp | and Bower
       Libraries like jQuery or Backbone.js |
       Front-end(CSS) frameworks like Foundation or Bootstrap
       </p>

    

       <p>Back-End:
       API design and development |
       Restful Services |
       Server-side languages like PHP | Python | Ruby | Java | JavScript | and .Net
       Database technologies like MySQL | Oracle | PostgreSQL | and MongoDB
       Web server technologies like Node.js | J2EE | Apache | Nginx | ISS | etc. |
       Frameworks related to their server-side language of choice like: Express.js Ruby on Rails | CakePHP | etc. |
       Good Communication Skills
       </p>


       <div className="social-links">

       {/* LinkedIn */}
       <a href="https://www.linkedin.com/in/ruben-clements-b7388b160/" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-linkedin-square" aria-hidden="true" />
       </a>

       {/* GitHub */}
       <a href="https://github.com/r4b2c1" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-github-square" aria-hidden="true" />
       </a>

       {/* Instagram */}
       <a href="https://www.instagram.com/n3rdt3ch0/?hl=en" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-instagram" aria-hidden="true" />
       </a>
        {/* Twitter */}
       <a href="https://twitter.com/@r4b2c1?lang=en" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-twitter-square" aria-hidden="true" />
       </a>

       {/* SnapChat */}
       <a href="https://www.snapchat.com/add/n3rdt3ch0" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-snapchat-square" aria-hidden="true" />
       </a>

        {/* Email */}
        <a href="mailto:n3rdt3ch0llc@outlook.com" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-envelope-square" aria-hidden="true" />
       </a>

       {/* Facebook */}
       <a href="https://www.facebook.com/ruben.clements.77" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-facebook-square" aria-hidden="true" />
       </a>

       </div>


          </div>
          </Cell>

         </Grid>
          </div>
      )  

      
    }
}




export default Landing;