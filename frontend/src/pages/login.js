import { useState } from "react";
import {useAuthContext} from "../hooks/useAuthContext"
import { useLogin } from "../hooks/useLogin";

 

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleLogin = async (e) => {
        e.preventDefault()
        
        await login(email, password)
    }


    return ( 
        <form className="signup" onSubmit={handleLogin}>
            <h3>Login</h3>

            <label>Email:</label>
            <input
            type="text"
            onChange = {(e) => setEmail(e.target.value)}
            value={email}
            ></input>

            <label>Password:</label>
            <input
            type="password"
            onChange = {(e) => setPassword(e.target.value)}
            value={password}
            ></input>
            <button disabled={isLoading}>Login</button>
            {error && <div className="error">{error}</div> }
        </form>
     );
}
 
export default Login;