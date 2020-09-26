import React from 'react'
import {Container,Title,SubTitle,Developer} from './styles/feature'

export default function Feature({children,...props}){
return <Container {...props}>{children}</Container>

}

Feature.Title = function FeatureTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>
}

Feature.SubTitle = function FeatureSubTitle({ children, ...props }) {
    return <SubTitle {...props}>{children}</SubTitle>
}

Feature.Developer=function FeatureDeveloper({children,...props}){
    return <Developer><small>developed By:</small> <a href="https://github.com/abhi3899">Abhinav Mishra</a> </Developer>
}