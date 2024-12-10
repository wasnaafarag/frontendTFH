import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:7777/register');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="list-container">
      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.ID}>
            {user.username} - {user.email} - {user.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
