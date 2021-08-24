import React from 'react'

import { SectionWrap } from '../../Elements/SectionWrap/'
import { AboutText } from '../../Elements/AboutText/'

import SectionTitle from '../SectionTitle/'

function About({ theme }) {
    console.log(theme)
    return (
        <SectionWrap background={theme.background} color={theme.color}>
            <SectionTitle color={theme.color} id="about" title="About"/>
            <AboutText>
                <h3>Rebekah is a developer with a background in graphic & layout design.</h3>
                <p>Before discovering web development, Rebekah worked as a desktop publisher and graphic designer. This background allows her to use her knowledge of design with a love of problem solving and a need to learn new things. Rebekah’s adaptability, consistency, and strong desire for collaboration help her to succeed in any role.</p>
                <p>Rebekah is a lifelong learner. Currently she’s curious about:</p>
                <ul>
                    <li>accessibility in web development</li>
                    <li>inspiring Women in tech, like Lauren Hasson and Barbara Oakley</li>
                    <li>getting real-world experience building a product from start to finish with Co.Lab</li>
                </ul>
            </AboutText> 
        </SectionWrap>
    )
}

export default About
