import React, {useRef} from 'react'
import './SignupScreen.css'
import {auth} from "../firebase"
import {useNavigate} from 'react-router-dom';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';



function SignUpScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();


    const register = (e) => {
        e.preventDefault();
        var obj = {
            email:  emailRef.current.value,
            password: passwordRef.current.value,
        }
        createUserWithEmailAndPassword(auth,obj.email,obj.password)
        .then((authUser) => {
            console.log(authUser)
        })
        .catch((error) => {
            alert(error.message)
        });
    };

    const signIn = (e) => {
        e.preventDefault();
        var obj = {
            email:  emailRef.current.value,
            password: passwordRef.current.value,
        }
        signInWithEmailAndPassword(auth,obj.email,obj.password)
        .then((authUser) => {
            console.log(authUser)
        })
        .catch((error)=>{
            alert(error.message)
        });
    };
  return (
    <div className="signupScreen">
      <form>
            <h1>Sign In</h1>
            <input type="email" ref={emailRef} placeholder="Email"/>
            <input type="password" ref={passwordRef} placeholder="Password"/>
            <button type="submit" onClick={signIn} onClickCapture={()=>navigate("/")}>Submit</button>
            <h4><span className="signupScreen__gray"> New to Netflix? </span>
           <span className="signupScreen__link" onClick={register}>Sign Up now.</span></h4>
        </form>
    </div>
  )
}

export default SignUpScreen