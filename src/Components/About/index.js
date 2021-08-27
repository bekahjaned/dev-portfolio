import React from 'react'

import { SectionWrap } from '../../Elements/SectionWrap/'
import { AboutText } from '../../Elements/AboutText/'

import SectionTitle from '../SectionTitle/'
import Subtitle from '../Subtitle'

// to do
// figure out how to make links stand out
//      the pink and blue don't have good contrast

function About({ theme }) {
    console.log(theme)
    return (
        <SectionWrap background={theme.background} color={theme.color}>
            <SectionTitle color={theme.color} id="about" title="About"/>
            <AboutText>
                <Subtitle color={theme.color} title="Rebekah is a developer with a background in graphic & layout design." />
                <p>Before discovering web development, Rebekah worked as a desktop publisher and graphic designer. This background allows her to use her knowledge of design with a love of problem solving and a need to learn new things. Rebekah’s adaptability, consistency, and strong desire for collaboration help her to succeed in any role.</p>
                <p>Rebekah is a lifelong learner. Currently she’s curious about:</p>
                <ul>
                    <li><a rel="noreferrer" target="_blank" href="https://www.a11yproject.com/checklist/">accessibility</a> in web development</li>
                    <li>inspiring Women in tech, like <a rel="noreferrer" target="_blank" href="https://developher.com/blog/">Lauren Hasson</a> and <a rel="noreferrer" target="_blank" href="https://barbaraoakley.com/books/a-mind-for-numbers/">Barbara Oakley</a></li>
                    <li>getting real-world experience building a product from start to finish with <a rel="noreferrer" target="_blank" href="https://www.joincolab.io/">Co.Lab</a></li>
                </ul>
            </AboutText> 
        </SectionWrap>
    )
}

export default About
