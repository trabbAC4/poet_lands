import {useState, useContext} from "react";
import {Navigate} from "react-router-dom";
import {UserContext} from "../UserContext"
import Header from "../Header";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });
        }
        else {
            alert('wrong credentials');
        }
    }
    if (redirect) {
        return <Navigate to ={'/profile'} />
    }
    return (
        <div class="container mx-auto h-full flex flex-1 justify-center items-center">
            <div class="w-full max-w-lg">
             <div class="leading-loose"></div>

            <form class = "max-w-sm m-10 p-10 bg-black bg-opacity-25 rounded shadow-xl" onSubmit={login}>
                <h1 class="text-white font-medium text-center text-lg font-bold"> LOGIN </h1> 
                <label class="block text-sm text-white" for="email">Username</label>
                <input type= "text"
                     placeholder= "username"
                     value = {username} 
                     class = "w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" placeholder="username" required=""
                     onChange = {ev => setUsername(ev.target.value)}
                />
                <label class="block text-sm text-white" for="password">Password</label>
                <input type='password' 
                    placeholder="password" 
                    value = {password}
                    class = "w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" placeholder = "......." required=""
                    onChange = {ev => setPassword(ev.target.value)}
                />
            <button class = "px-20 py-5 text-white font-light tracking-wider bg-gray-900 hover:bg-blue-800 rounded"> Login </button>
            </form>
        </div>
        </div>
    )
}