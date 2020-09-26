import React from 'react'
import JumbotronContainer from '../../Containers/jumbotron';
import {Item,Inner,Container,Title ,SubTitle ,Image,Pane} from './styles/jumbotron'

export default function Jumbotron({children,direction="row",...props}) {
    return (
        <Item {...props}>
             <Inner direction={direction}>
                 {children}
             </Inner>
        </Item>
    )
}

Jumbotron.Container=function JumbotronContainer({children,...props}){
    return <Container {...props}>{children}</Container>;
}

Jumbotron.Title = function JumbotronTitle({children,...props})
{
return <Title {...props}> {children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({children,...props})
{
return <SubTitle {...props}> {children}</SubTitle>
}

Jumbotron.Image= function JumbotronImage({...props}){
     return <Image {...props} />
}

Jumbotron.Pane= function JumbotronPane({children,...props}){
return <Pane>{children}</Pane>
}