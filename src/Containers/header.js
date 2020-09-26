import React from 'react'
import Header from '../Components/Header'
import * as Routes from '../Routes/routes'
import logo from '../logo.svg'


export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={Routes.HOME} src={logo}alt="Netflix" />
                <Header.ButtonLink to={Routes.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}

export default HeaderContainer
