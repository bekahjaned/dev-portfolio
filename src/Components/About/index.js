import React from 'react'

import { SectionWrap } from '../../Elements/SectionWrap/'
import { AboutText } from '../../Elements/AboutText/'

import SectionTitle from '../SectionTitle/'
import Subtitle from '../Subtitle/'
import Link from '../Link/'

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
                    <li><Link color={theme.link} hover={theme.linkHover} url="https://www.a11yproject.com/checklist/" text="accessibility" /> in web development</li>
                    <li>inspiring Women in tech, like <Link color={theme.link} hover={theme.linkHover} url="https://developher.com/blog/" text="Lauren Hasson" /> and <Link color={theme.link} hover={theme.linkHover} url="https://barbaraoakley.com/books/a-mind-for-numbers/" text="Barbara Oakley" /></li>
                    <li>getting real-world experience building a product from start to finish with <Link color={theme.link} hover={theme.linkHover} url="https://www.joincolab.io/" text="Co.Lab" /></li>
                </ul>
            </AboutText> 
        </SectionWrap>
    )
}

export default About
