import React from 'react'

import { HeaderWrap } from '../../Elements/HeaderWrap/'

import MyPhoto from '../../Assets/photo-me.jpg'

function Header({ theme }) {
    return (
        <HeaderWrap backgound={theme.backgound} color={theme.color}>
            <div className="header-text">
                <h1>Rebekah De&nbsp;Jong</h1>
                <p>A front-end developer who is passionate about doing good & helping others do good</p>
            </div>
            <img src={MyPhoto} alt="me" />
        </HeaderWrap>
    )
}

export default Header
