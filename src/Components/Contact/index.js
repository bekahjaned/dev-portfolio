import React from 'react'

import { ContactWrap } from '../../Elements/ContactWrap/'

import SectionTitle from '../SectionTitle/'

import myPhoto from '../../Assets/me-contact.jpg'

function Contact({ theme }) {
    return (
        <ContactWrap color={theme.color} background={theme.background}>
            <SectionTitle color={theme.color} id="contact" title="Contact"/>
            <div className="content">
                <img className="contact-image" alt="me" src={myPhoto}/>
                <div className="text-group">
                    <p>You can reach Rebekah at bekahjaned@gmail.com or connect on <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rebekahdejong/">LinkedIn</a> or <a rel="noreferrer" target="_blank" href="https://github.com/bekahjaned">GitHub</a></p>
                    <p>Rebekah is more than happy to discuss her front-end skills, as well as baking, soccer, needle-felting and shark movies.</p>
                </div>
            </div>
        </ContactWrap>
    )
}

export default Contact
