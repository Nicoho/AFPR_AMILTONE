import React, { useState } from 'react';
import './login.styles.scss'
const Login = ({ switchRoute }) => {
    const [state, setState] = useState("")
    const handleSubmit = () => {
        if (state === "") {
            switchRoute("user")
        } else {
            switchRoute(state)
        }
    }
    return (
        <div className="Login">
            <div className="form" >

                <input type="text" className="" placeholder="USER" onChange={e => setState(e.target.value)} />
                <button onClick={() => handleSubmit()}>Connexion</button>
            </div>
        </div>
    )
}

export default Login;