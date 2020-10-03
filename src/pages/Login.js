import React from "react";
import LoginForm from "../components/forms/LoginForm";
import Heading from "../components/heading/Heading";

function Login() {
    return (
        <div>
            <Heading title="Login Form" />

            <LoginForm />
        </div>
    );
}

export default Login