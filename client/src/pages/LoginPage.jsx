import { Link } from "react-router-dom";
import {useState} from "react";
import axios from "axios";



export default function LoginPage()
{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLoginSubmit(ev){
        ev.preventDefault();
        try{
            axios.post("/login", {email,password});
            alert("Login Successful!");
        } catch(e) {
            alert("Login Failed!");
        }
        

    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
                <h1 className="text-4xl text-center p-2 mb-4">Welcome to landBnB</h1>
                <form className="max-w-md mx-auto text-center" onSubmit={handleLoginSubmit}>
                    <input type='email' placeholder="your@email.com"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}>

                        </input>
                    <input type='password' placeholder="Enter your password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}></input>
                    <button className="primary">Login</button>

                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet?  <Link to={"/register"} className="underline font-bold">Register</Link>
                    </div>
                </form>
                </div>
            
        </div>
    );
}