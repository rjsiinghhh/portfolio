import React from 'react';
import Card2 from './Card2'
import './Card2.css'
import ReactLogo from './images/react.svg'
import HTMLLogo from './images/html5.svg'
import CSSLogo from './images/css3.svg'
import JavaScriptLogo from './images/javascript.svg'
import SassLogo from './images/sass.svg'
import PHPLogo from './images/php.svg'
import JQueryLogo from './images/jquery.svg'
import AngularLogo from './images/angularjs.svg'
import SwiftLogo from './images/swift.svg'
// import VueLogo from './images/vuejs.svg'
import NodeLogo from './images/nodejs.svg'
import ExpressLogo from './images/express.svg'
import MongoDBLogo from './images/mongodb.svg'
import PostgresLogo from './images/postgresql.svg'
import FigmaLogo from './images/figma.svg'
import GithubLogo from './images/github.svg'
import BootstrapLogo from './images/bootstrap.svg'
import BabelLogo from './images/babel.svg'
import HerokuLogo from './images/heroku.svg'

const Skills = () => {
    return(
        <div className="icons">
        
        <h4>Skills</h4>
        <Card2>

        <div className="size">
        <div className="skillsIcons1">

        <img src={JavaScriptLogo} alt="Javascript Logo" />
        <img src={AngularLogo} alt="Angular Logo" />
        <img src={ReactLogo} alt="React Logo" />
        <img src={PostgresLogo} alt="Postgres Logo" />
        <img src={PHPLogo} alt="PHP Logo" />
        <img src={MongoDBLogo} alt="MongoDB Logo" />
        <img src={CSSLogo} alt="CSS Logo" />
        <img src={JQueryLogo} alt="JQuery Logo" />
        <img src={HTMLLogo} alt="HTML Logo" />
        </div>

        
        <img src={BootstrapLogo} alt="Bootstrap Logo" />
        <img src={SwiftLogo} alt="Swift Logo" />
        <img src={NodeLogo} alt="Node Logo" />
        <img src={ExpressLogo} alt="Express Logo" />
        <img src={SassLogo} alt="Sass Logo" />
        <img src={GithubLogo} alt="Github Logo" />
        <img src={FigmaLogo} alt="Figma Logo" />
        <img src={BabelLogo} alt="Babel Logo" />
        <img src={HerokuLogo} alt="Heroku Logo" />
        

        </div>
        

        </Card2>

        </div>
  
        


      
    )
}



export default Skills;