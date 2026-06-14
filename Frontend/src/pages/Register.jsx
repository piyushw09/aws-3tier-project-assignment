import { useState } from "react";
import API from "../services/api";

function Register() {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const submitForm = async () => {

        try {

            await API.post("/users", form);

            alert("User Created");

        } catch (error) {

            alert("Error Creating User");

        }
    };

    return (
        <div>

            <h2>Register User</h2>

            <input
                placeholder="Username"
                onChange={(e) =>
                    setForm({
                        ...form,
                        username: e.target.value
                    })
                }
            />

            <br /><br />

            <input
                placeholder="Email"
                onChange={(e) =>
                    setForm({
                        ...form,
                        email: e.target.value
                    })
                }
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                    setForm({
                        ...form,
                        password: e.target.value
                    })
                }
            />

            <br /><br />

            <button onClick={submitForm}>
                Register
            </button>

        </div>
    );
}

export default Register;