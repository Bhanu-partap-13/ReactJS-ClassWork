import { useState, useEffect } from 'react';

const employees = [
    { name: "prachi", role: "Developer" },
    { name: "mam", role: "Tester" }
];

const roles = ["Developer", "Tester"];

function SearchFilter() {
    const [search, setSearch] = useState("");     
    const [roleFilter, setRoleFilter] = useState("All");
    const [filteredEmployees, setFilteredEmployees] = useState(employees); 

    useEffect(() => {
        let filtered = employees;

        if (roleFilter !== "All") {
            filtered = filtered.filter(emp => emp.role === roleFilter);
        }

        if (search.trim() !== "") {
            filtered = filtered.filter(emp => 
                emp.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredEmployees(filtered);
    }, [search, roleFilter]); 

    return (
        <div>
            <h1>Employee Directory</h1>
            
            <label>Search by Name:</label>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter employee name..."
            />

            <br /><br />

            <label>Filter by Role:</label>
            <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
                {roles.map((role, index) => (
                    <option key={index} value={role}>{role}</option>
                ))}
            </select>

            <h2>Results: {filteredEmployees.length} employee(s)</h2>
            
            {filteredEmployees.length > 0 ? (
                <ul>
                    {filteredEmployees.map((employee, index) => (
                        <li key={index}>
                            <strong>{employee.name}</strong> - {employee.role}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No employees found.</p>
            )}
        </div>
    );
}

export default SearchFilter;
