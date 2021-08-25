import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

import { SectionTitleWrap } from '../../Elements/SectionTitleWrap/'

function SectionTitle({ color, id, title }) {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);

    return (
        <SectionTitleWrap data-aos="fade-down" color={color}>
            <h2 id={id}>{title}</h2>
            <hr data-aos="line-grows" />
        </SectionTitleWrap>
    )
}

export default SectionTitle