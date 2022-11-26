import React, { useEffect, useState } from 'react';
import axios from "axios";
const Users = () => {
    const [dbUser, setDbUser]=useState([])
    useEffect(()=>{
        axios
        .get(`http://localhost:5000/users/${'User'}`)
        .then((res) => setDbUser(res.data));
    },[])
    return (
        <div>
           <p>{dbUser.length}</p>
        </div>
    );
};

export default Users;
