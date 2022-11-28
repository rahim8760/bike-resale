import React, { useContext, } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
const Users = () => {
    useTitle('User Profile')
    const {user}=useContext(AuthContext)
    const {displayName, email, photoURL, }=user
    
    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold my-10 bg-cyan-200 rounded-3xl py-10 uppercase text-center'>This is  {displayName} Profile</h1>
            </div>
            <div className='flex justify-evenly my-10'>
           <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={photoURL} alt='' />
                </div>
            </div>
           <div className="">
            <div className="">
                <h1 className='text-3xl font-semibold'>{displayName}</h1>
            </div>
            <div className="">
                <h1 className='text-3xl font-semibold'>{email}</h1>
            </div>
           </div>
            
        </div>
        </div>
    );
};

export default Users;
