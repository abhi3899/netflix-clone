import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import HeaderContainer from '../Containers/header'
import {FooterContainer} from '../Containers/footer'
import Form from '../Components/Form/index'
import { FirebaseContext } from '../Context/Firebase'
import * as ROUTES from '.././Routes/routes'

const Signup = () => {
    const history=useHistory()
    const {firebase} = useContext(FirebaseContext)
    const[firstName,setFirstName]=useState('')
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

     const isInvalid= firstName==='' ||password===''|| email==='';

     const handleSignUp= (event)=>{
         event.preventDefault()
         return firebase 
         .auth()
         .createUserWithEmailAndPassword(email,password)
         .then((result)=>
         result.user
         .updateProfile({
             displayName:firstName,
             photoUrl:Math.floor(Math.random() *5)+1,
           }).then(()=>{
               history.push(ROUTES.BROWSE)
           })
         
         ).catch((error)=>{
             setFirstName('')
             setEmail('')
             setPassword('')
             setError(error.message)
         })
     }
    

    return (
        <>
           <HeaderContainer>
               <Form>
                   <Form.Title>Sign Up</Form.Title>
                   {error &&<Form.Error> {error}</Form.Error>}
                   <Form.Base onSubmit={handleSignUp} method='POST'>
                   <Form.Input
                       placeholder='First Name'
                       value={firstName}
                       onChange={({target})=>setFirstName(target.value)} />
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
                           Sign Up
                       </Form.Submit>
                       <Form.Text> Already A User? <Form.Link to='/sign_in'>Sign In now</Form.Link></Form.Text>
                    <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                   </Form.Base>
               </Form>
           </HeaderContainer>
           <FooterContainer></FooterContainer>
           </>
    )
}

export default Signup
