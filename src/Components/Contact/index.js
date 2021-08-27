import React from 'react'

import { SectionWrap } from '../../Elements/SectionWrap/'
import { ContactText } from '../../Elements/ContactText/'

import SectionTitle from '../SectionTitle/'

import myPhoto from '../../Assets/me-contact.jpg'

function Contact({ theme }) {
    return (
        <SectionWrap color={theme.color} background={theme.background}>
            <SectionTitle color={theme.color} id="contact" title="Contact"/>
            <ContactText>
                <img className="contact-image" alt="me" src={myPhoto}/>
                <div className="text-group">
                    <p>You can reach Rebekah at bekahjaned@gmail.com or connect on LinkedIn or GitHub</p>
                    <p>Rebekah is more than happy to discuss her front-end skills, as well as baking, soccer, needle-felting and shark movies.</p>
                </div>
            </ContactText>
        </SectionWrap>
    )
}

export default Contact
