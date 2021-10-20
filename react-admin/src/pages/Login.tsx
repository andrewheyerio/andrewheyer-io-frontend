import React from "react";
import '../Login.css'
import logo from "../logo.svg";

const submit = "value"

const Login = () => {

    return (
        <main className="form-signin">

            <html className="pixelart-to-css"/>

            <form>

                {/*<div className="andrewheyer-logo">*/}
                {/*    <Logo/>*/}
                {/*</div>*/}




                <h1 className="h3 mb-3 fw-normal">andrewheyer.io</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"

                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"

                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>


                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </main>
    );
};

export default Login;