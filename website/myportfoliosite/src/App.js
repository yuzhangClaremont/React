import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Main from './components/main';

import { Layout, Header, Navigation, Drawer, Content, Footer, FooterLinkList, FooterSection } from 'react-mdl';

// import { Link } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
    <div style={{height: '800px', position: 'relative'}}>
    <Layout  >
        <Header title="Yun Zhang" className="header-color">
        <Navigation>
                    <a href="/">Home</a>
                    <a href="https://www.linkedin.com/in/yun-zhang-claremont/">Linkedin</a>
                    <a href="https://github.com/yuzhangClaremont">Github</a>
                    <a href="/resume">Resume</a>
                    <a href="/projects">Projects</a>
                </Navigation>
          </Header>
            <Drawer title="Yun Zhang">
                <Navigation>
                    <a href="/">Home</a>
                    <a href="https://www.linkedin.com/in/yun-zhang-claremont/">Linkedin</a>
                    <a href="https://github.com/yuzhangClaremont">Github</a>
                    <a href="/resume">Resume</a>
                    <a href="/projects">Projects</a>
                </Navigation>
            </Drawer>
            <Main/>
        <Content />

        <Footer size="mini">
            <FooterSection type="left" logo="Title">
                <FooterLinkList>
                    <a href="#">Help</a>
                    <a href="#">Privacy & Terms</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>
    </Layout>
</div>

      

  
    );
  }
}

export default App;
