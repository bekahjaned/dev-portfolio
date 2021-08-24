import React from 'react'

import { HeaderWrap } from '../../Elements/HeaderWrap/'

import MyPhoto from '../../Assets/photo-me.jpg'

function Header() {
    return (
        <HeaderWrap>
            <div className="header-text">
                <h1>Rebekah De Jong</h1>
                <p>A front-end developer who is passionate about doing good & helping others do good</p>
            </div>
            <img src={MyPhoto} alt="me" />
        </HeaderWrap>
    )
}

export default Header
