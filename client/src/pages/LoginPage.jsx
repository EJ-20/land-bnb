import { Link } from "react-router-dom";
export default function LoginPage()
{
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
                <h1 className="text-4xl text-center p-2 mb-4">Welcome to landBnB</h1>
                <form className="max-w-md mx-auto text-center">
                    <input type='email' placeholder="your@email.com"></input>
                    <input type='password' placeholder="Enter your password"></input>
                    <button className="primary">Login</button>

                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet?  <Link to={"/register"} className="underline font-bold">Register</Link>
                    </div>
                </form>
                </div>
            
        </div>
    );
}