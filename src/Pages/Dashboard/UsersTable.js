import React from 'react';

const UsersTable = ({ info, index }) => {
  
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{info.email}</td>
            <td>
                <button className="btn btn-xs bg-green-500">Make Admin</button>
            </td>

        </tr>
    );
};

export default UsersTable;