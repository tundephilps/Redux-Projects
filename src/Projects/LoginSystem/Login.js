import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './Features/userSlice';
import "./Login.css"
import apple from "../../images/logo-apple.svg";
import facebook from "../../images/logo-facebook.svg";
import google from "../../images/logo-google.svg";


function Login() {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
            name: name,
            email: email,
            password: password,
            loggedIn: true,
        })
        );
    };


  return (
    <>
 
    <section class="block login">
        <div class="wrapper">
            <div class="row">
                <div class="col form-card">
                    <h1 id="logintitle" class="form-card__title">Login System Using Redux</h1>
                    <p class="form-card__copy">Hey, Enter your details to get sign in <br /> to your account.</p>
                    <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <div class="form-group">
                            <input
                            type="name"
                            placeholder="Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                       
                        <div class="form-group">
                            <input type="text" placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                             />
                        </div>
                        <div class="form-group">
                            <input type="password" placeholder="passcode"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            
                            />
                            <span class="action">hide</span>
                        </div>
                        <a href="#">having trouble sign in?</a>
                        <button type="submit" class="btn primary">Submit</button>
                    </form>
                    <span class="form-card__optional-tag">
                        Or Sign in with
                    </span>
                    <div class="form-card__social-signup">
                        <a href="#" class="btn primary primary-alt">
                            <img src={google} alt="google-logo" />
                            google
                        </a>
                        <a href="#" class="btn primary primary-alt">
                            <img src={apple} alt="apple-logo" />
                            apple ID
                        </a>
                        <a href="#" class="btn primary primary-alt">
                            <img src={facebook} alt="facebook-logo" />
                            facebook
                        </a>
                    </div>
                    <p class="create-account">don't have an account? <a href="#">request now</a></p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login