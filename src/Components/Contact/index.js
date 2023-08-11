import React from 'react';

import { ContactWrap } from '../../Elements/ContactWrap/';

import SectionTitle from '../SectionTitle/';
import Link from '../Link/';

import contactPhoto from '../../Assets/me-contact.jpg';

function Contact({ theme }) {
    return (
        <ContactWrap color={theme.color} background={theme.background}>
            <SectionTitle color={theme.color} id="contact" title="Contact"/>
            <div className="content">
                <img className="contact-image" alt="me" src={contactPhoto}/>
                <div className="text-group">
                    <p className="add-margin">You Connect on <Link color={theme.link} hover={theme.linkHover} url="https://www.linkedin.com/in/rebekahdejong/" text="LinkedIn" /> or <Link color={theme.link} hover={theme.linkHover} url="https://github.com/bekahjaned" text="GitHub" /></p>
                    <p>Rebekah is more than happy to discuss her front-end skills, as well as baking, soccer, needle-felting and shark movies.</p>
                </div>
            </div>
        </ContactWrap>
    );
};

export default Contact;
