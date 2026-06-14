import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetchUsers();

    }, []);

    const fetchUsers = async () => {

        const response = await API.get("/users");

        setUsers(response.data);
    };

    return (
        <div>

            <h2>Dashboard</h2>

            <table border="1">

                <thead>

                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>

                </thead>

                <tbody>

                    {users.map((user) => (

                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Dashboard;