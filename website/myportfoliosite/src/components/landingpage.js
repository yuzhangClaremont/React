import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import headshot from './images/skull.jpeg';
import bigsur from './images/bigsur.jpeg';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
             
              src= {headshot} //"https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
            
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h2>Yun Zhang</h2>
              <h1>Aspiring Full Stack Developer</h1>

            <hr/>

          <p>HTML/CSS | JavaScript | React | Python | Java | C++ | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/yun-zhang-claremont/"  target="_blank">
            <i className="fa fa-linkedin-square" />
          </a>

          {/* Github */}
          <a href="https://github.com/yuzhangClaremont" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square"  />
          </a>

         

          {/* Instagram */}
          <a href="https://www.instagram.com/brianmaxzhangxuanxiao/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
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