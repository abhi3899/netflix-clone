import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import HeaderContainer from '../Containers/header'
import {FooterContainer} from '../Containers/footer'
import Form from '../Components/Form/index'
import { FirebaseContext } from '../Context/Firebase'
import * as ROUTES from '.././Routes/routes'

const Signin = () => {
    const history=useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

     const isInvalid= password===''|| email==='';
     const handleSigin=(event)=>{  event.preventDefault()
        return firebase
       .auth()
       .signInWithEmailAndPassword(email,password)
       .then(()=>{
           history.push(ROUTES.BROWSE)
             
       })
       .catch((error)=>{
           setEmail('')
           setPassword('')
           setError(error.message)
       })}
      
 return (
        <div>
            <>
           <HeaderContainer>
               <Form>
                   <Form.Title>Sign In</Form.Title>
                   {error &&<Form.Error> {error}</Form.Error>}
                   <Form.Base onSubmit={handleSigin} method='POST'>
                       <Form.Input
                       placeholder='Email Address'
                       value={email}
                       onChange={({target})=>setEmail(target.value)} />
                       <Form.Input
                       type='password'
                       autoComplete='off'
                       placeholder='Password'
                       value={password}
                       onChange={({target})=>setPassword(target.value)} />
                       <Form.Submit disabled={isInvalid} type='submit'>
                           Sign In
                       </Form.Submit>
                       <Form.Text> New To Netflix? <Form.Link to='/sign_up'>Sign Up now</Form.Link></Form.Text>
                    <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                   </Form.Base>
               </Form>
           </HeaderContainer>
           <FooterContainer></FooterContainer>
           </>
        </div>
    )
}

export default Signin
