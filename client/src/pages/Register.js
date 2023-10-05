import {useState} from "react";
import {Navigate} from "react-router-dom";



export default function Register() {
    const [username, setUsername] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [redirect, setRedirect] = useState(false);
    async function register(ev) { 
        ev.preventDefault(); 
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.status === 200) {
            alert('register successful. Login now!');
            setRedirect(true);
        }
        else {
            alert('registration failed')
        }
    }
    if (redirect) {
        return <Navigate to={'/login'} />
    }
    return (
        <div class="container mx-auto h-full flex flex-1 justify-center items-center">
            <div class="w-full max-w-lg">
             <div class="leading-loose"></div>

            <form className="max-w-sm m-10 p-10 bg-black bg-opacity-25 rounded shadow-xl" onSubmit={register}>
            <h1 class="text-white font-medium text-center text-lg font-bold"> REGISTER TO USE OUR PLATFORM</h1> 
            <label class="block text-sm text-white" for="email">Enter a username</label>
                <input type= "text" 
                    placeholder= "username"
                    value = {username}
                    class= "w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" placeholder ="username" required= ""
                    onChange ={ev => setUsername(ev.target.value)} />
                <label class="block text-sm text-white" for="password">Enter a password</label>
                <input type='password'
                     placeholder="password"
                     value = {password}
                     class = "w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                     onChange = {ev => setPassword(ev.target.value)} />
                <button class = "px-20 py-5 text-white font-light tracking-wider bg-gray-900 hover:bg-blue-800 rounded"> Register</button>
            </form>
        </div>
        </div>

    )
}