import React, {useState} from 'react'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import {Redirect} from 'react-router-dom';
import './Login.css'
import { useHistory } from 'react-router-dom';

// Your web app's Firebase configuration


function Login() {
    const firebaseConfig = {
        apiKey: "AIzaSyCFeqmcPyvBnMGXPiBN2idGwP_Qkt2rYP0",
        authDomain: "r34ctproject.firebaseapp.com",
        projectId: "r34ctproject",
        storageBucket: "r34ctproject.appspot.com",
        messagingSenderId: "391314083568",
        appId: "1:391314083568:web:b1be48903937c1a2547c35"
      };
      
      // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [message, setmessage] = useState('Signup or Login')
    function onSignUp() {

        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => { // Signed in
            setmessage("Signing Up...");
            setTimeout(() => {
                history.push("/")
            },2000);
            
        }).catch((error) => {
            console.log(error)
            setmessage('Please check if email and password are correct')
        });


    }
    function onSignIn() {
        
       
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            setTimeout(() => {
                history.push("/")
            },2000);
            // ...
          })
          .catch((error) => {
              console.log(error)
            setmessage('Please check if email and password are correct')
          });
    }
    
    return (
        
            <div className='login_form'>
               <img alt="utubelogo" className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png"/>
         
            <input placeholder="Email"  type="email"
                value={email}
                onChange={
                    e => setemail(e.target.value)
                }/>
            <input placeholder="Password"  type="password"
                value={password}
                onChange={
                    e => setpassword(e.target.value)
                }/>
            
            <div className="buttons">

                <button className=" signin"
                onClick={()=>
                    onSignIn()
            }>Log In</button>

            <button className=" signup"
                onClick={()=>
                     onSignUp()
            }>Sign Up</button>
            </div>

            <h3>{message}</h3>

        </div>)
       
        

        } 



export default Login
