import React from 'react'

import AboutBottom from '../Components/about/AboutBottom'
import Aboutmiddle from '../Components/about/Aboutmiddle'
import AboutTop from '../Components/about/AboutTop'
import '../index.css'

function About(params) {
    return(
        <div >
            <AboutTop/>
            <Aboutmiddle/>
            <AboutBottom/>
        </div>
    );
}

export default About