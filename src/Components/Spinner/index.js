import React from 'react'
import { LockBody, ReleaseBody, Spinner ,Picture} from './styles/spinner';

const Loading = ({src,...props}) => {
    return (
        <Spinner {...props}>
        <LockBody />
        <Picture src={`/images/users/${src}.png`} />
    </Spinner>
    )
}

 Loading.ReleaseBody=function LoadingReleaseBody({children,...props}){
 return <ReleaseBody {...props}/>
 }

export default Loading
