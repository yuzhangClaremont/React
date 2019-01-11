import React, {Component} from 'react';
import resume from './resume.pdf';

class Resume extends Component{
    render(){
        return (
            <div>
                <h1>Resume</h1>
                <a href={resume}>Click here for my pdf</a>
            </div>
        )
    }
}

export default Resume;