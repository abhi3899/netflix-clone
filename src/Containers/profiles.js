import React from 'react';
import Header from '../Components/Header';
import * as ROUTES from '../Routes/routes'
import logo from '../logo.svg'
import Profiles from '../Components/Profile/index'

export function SelectProfileContainer({ user, setProfile ,photoURL}) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo 
                        to={ROUTES.HOME} 
                        src={logo}
                        alt="Netflix"
                    />
                </Header.Frame>
            </Header>
            <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => setProfile({ displayName: user.displayName, photoURL: photoURL })}
            data-testid="user-profile"
          >
            <Profiles.Picture src={photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
        </>
    )
}