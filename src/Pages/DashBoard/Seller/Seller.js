import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
const Seller = () => {
    const {setLoading}=useContext(AuthContext)
    const [findUser, setFindUser]=useState()
    console.log(findUser);
    const handleSubmit=event=>{
        
        event.preventDefault()
        const form=event.target
        const role=form.role.value
        console.log(role);
        setFindUser(role)
        
    }
        const [dbUser, setDbUser]=useState([])
        useEffect(()=>{
            axios
            .get(`http://localhost:5000/users/${findUser}`)
            .then((res) => setDbUser(res.data));
        },[findUser])
        
        const handleDeletes = id=>{
            const agree =window.confirm('you want to delete')
            if(agree){
                fetch(`http://localhost:5000/usersDelete/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then (data=>{
                    if(data.deletedCount > 0){
                      const remaining = dbUser.filter(r => r._id !== id);
                      setDbUser(remaining);
                      setLoading(false)
                        toast.success('delete successfully')
                    }
                })
            }
          }
          const status={
            Status:'verify'
          }
    const handleUserStatus=id=>{
        fetch(`http://localhost:5000/updateUser/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(status)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        
    }
    return (
        
        <div>
            <h1 className='text-3xl font-bold my-10 bg-red-300 rounded-3xl py-10 uppercase text-center'>this is user component</h1>
            
            <form onSubmit={handleSubmit} className="card flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">filter User and Seller</span>
                        </label>
                        <select name='role' className="select w-full input input-bordered">
                            <option value='User'>User Info</option>
                            <option value='Seller'>Seller Info</option>
                        </select>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Find User & Seller</button>
                    </div>
                </div>
            </form>
            <div className='text-center my-10'><p className='text-3xl'>Total  {dbUser[0]?.role} {dbUser.length}</p></div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                    <tr>
                        <th>sl</th> 
                        <th>Name</th> 
                        <th>Email</th> 
                        <th>User Role</th> 
                        <th>User Role</th> 
                        <th>UPDATE</th> 
                        <th>DELETE</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody> 
                        {
                            dbUser.map((uInfo,i)=><tr key={uInfo._id}>
                            <th>{i+1}</th> 
                            <td>{uInfo.displayName}</td>
                            <td>{uInfo.email}</td> 
                            <td>{uInfo.role}</td> 
                            <td>{uInfo.role}</td> 
                            <td> <button className='btn btn-sm bg-warning'> UPDATE</button> </td> 
                            <td><button onClick={()=>handleDeletes(uInfo._id)} className='btn btn-sm bg-red-600'> DELETE</button></td>
                            <td> 
                                {
                                    uInfo?.userStatus==='verify'?<>
                                    <button disabled className='btn btn-sm'>{uInfo?.userStatus}</button>
                                    </>:<>
                                    <button onClick={()=>handleUserStatus(uInfo._id)} className='btn btn-sm bg-info'>{uInfo?.userStatus}</button>   
                                    </>
                                }
                            </td>
                            </tr>)
                        }      
                    </tbody> 
                    
                </table>
            </div>
            
        </div>
    );
};

export default Seller;