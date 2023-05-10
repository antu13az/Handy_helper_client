import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { BASE_API } from '../../Config';
const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`${BASE_API}/allUsers`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => setUsers(result))
    }, [])

    const makeAdmin = (email) => {
        fetch(`${BASE_API}/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("You are not an admin. you can't make an admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('admin add successfully')

                }
            })
    }
    return (
        <div>
            <h1 className="text-center font-bold text-2xl mb-8">Users/Admin</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Email</th>
                            <th>Make Admin</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td> {
                                    user.role !== "admin" ?
                                        <button onClick={() => makeAdmin(user.email)} className="btn btn-xs bg-green-600 text-white hover:text-white hover:bg-slate-800">Make Admin</button>
                                        :
                                        <button className="btn btn-xs bg-pink-600 text-white hover:text-white ">Already Admain</button>
                                }</td>



                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;