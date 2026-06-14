import { useState } from "react";
import API from "../services/api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async () => {

        try {

            const response = await API.post("/users/login", {
                email,
                password
            });

            alert(response.data.message);

        } catch (error) {

            alert("Login Failed");

        }
    };

    return (
        <div>
            <h2>Login</h2>

            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={loginUser}>
                Login
            </button>
        </div>
    );
}

export default Login;