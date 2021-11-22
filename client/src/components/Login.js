import { useState } from "react";

function Login({onLogin }) {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);



function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
            r.json().then((user) => onLogin(user));
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
    });
}

    return(
        <form onSubmit={handleSubmit}>
            <label >
                <p>Username</p>
                <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                <p>Password</p>
                <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>

            </div>
            
            <div class="alert alert-primary" role="alert">
                
            </div>
        </form>
    )
}

export default Login;