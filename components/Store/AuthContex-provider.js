import React, { useState } from "react";
import AuthContext from "./Auth-context";

const AuthContexProvider = (props) => {
    const [token, setToken] = useState(null)

    const userIsLoggedIn = !!token
    const loginHandler = (token) => {
        setToken(token)
    }
    const logOutHandler = () => {
        setToken(null)
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