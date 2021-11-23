import React from 'react';
import { useState, useEffect} from 'react';


function SignUp({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    

    function handleSignUpSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify({
            username,
            password,
        }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
            r.json().then((user) => onLogin(user));
            }
        });
        // add redirect hook();
    }

    return (
        <div>
            
        </div>
    )
}


export default SignUp;

// if (r.ok) { # for handlesignupsubmit
//     r.json().then((user) => onLogin(user));
// } else {
//     r.json().then((err) => setErrors(err.errors));
// }