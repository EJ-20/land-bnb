import { Link } from "react-router-dom";
import {useState} from "react";
import axios from "axios";




export default function RegisterPage()
{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function registerUser(ev){
        ev.preventDefault();
        axios.post('/register', {
            name,
            email,
            password,
        });
        
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
                <h1 className="text-4xl text-center p-2 mb-4">Join us at landBnB</h1>
                <form className="max-w-md mx-auto text-center" onSubmit={registerUser}>
                <input type="text" 
                        placeholder="Enter your name" 
                        value={name} 
                        onChange={ev => setName(ev.target.value)}/>
                    <input type='email' 
                        placeholder="your@email.com"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}></input>
                    <input type='password' 
                        placeholder="Enter your password"
                        value={password}
                        onChange={ev=>setPassword(ev.target.value)}></input>
                    <button className="primary">Register</button>

                    <div className="text-center py-2 text-gray-500">
                        Already have an account?  <Link to={"/login"} className="underline font-bold">Login</Link>
                    </div>
                </form>
            </div>
            
            
        </div>
    );
}