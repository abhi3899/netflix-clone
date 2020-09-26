import React from 'react'
import { FaqsContainer } from '../Containers/faq'
import { FooterContainer } from '../Containers/footer'
import JumbotronContainer from '../Containers/jumbotron'
import HeaderContainer from '../Containers/header'
import OptForm from '../Components/Opt-Form/index'
import Feature from '../Components/Feature'




const Home = () => {
    return (
        <div>
            <>
            <HeaderContainer >
            <Feature>
                        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
            <OptForm>
                   
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to create or restart
                        your membership.</OptForm.Text>
                 
                </OptForm>
                <Feature.Developer />
                   </Feature>
               
            </HeaderContainer>
            <JumbotronContainer />
             <FaqsContainer />
            <FooterContainer />
            </>
          
        </div>
    )
}

export default Home
