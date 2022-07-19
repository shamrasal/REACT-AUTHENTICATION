import React, { useState } from "react";
import AuthContext from "./Auth-context";

const AuthContexProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)

    const userIsLoggedIn = !!token
    const loginHandler = (token) => {
        localStorage.setItem('token', token)
        setToken(token)
    }
    const logOutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
    }

    const authcontext = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        logIn: loginHandler,
        logOut: logOutHandler
    }
    return (
        <AuthContext.Provider value={authcontext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContexProvider