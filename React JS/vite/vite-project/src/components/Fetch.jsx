import { useState, useEffect } from 'react';

function Fetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('aV4joR1GJcdm26SlvnvGBsjpN')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error.message);
            setLoading(false);
        })
    }, []);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <div>
            <h1>User Data</h1>
            <ul>
                {data.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                        </li>
                ))}
                </ul>
             </div>
            );
}

export default Fetch;