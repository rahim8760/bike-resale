import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import {AuthContext} from '../../../Context/AuthProvider/AuthProvider'
import axios from "axios";
import { toast } from 'react-toastify';

const MyProducts = () => {
    const {user}=useContext(AuthContext)
    const{email, displayName}=user
    console.log(email);

    const [showProducts, setShowProducts]=useState([])
        useEffect(()=>{
            axios
            .get(`http://localhost:5000/myProduct/${email}`)
            .then((res) => setShowProducts(res.data));
        },[email])

    const handleDelete = id=>{
        const agree =window.confirm('you want to delete')
        if(agree){
            fetch(`http://localhost:5000/productDelete/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then (data=>{
                if(data.deletedCount > 0){
                  const remaining = showProducts.filter(r => r._id !== id);
                  setShowProducts(remaining);
                    toast.success('delete successfully')
                }
            })
        }
      }
      const status={
        Status:'approved'
      }
      console.log(status);
      const handleSubmit=(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/updateProduct/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(status)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setShowProducts(...data)
        })
    }
    
    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold my-10 bg-lime-200 rounded-3xl py-10 uppercase text-center'>this is {displayName}  product</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                    <tr>
                        <th>sl</th> 
                        <th>Name</th> 
                        <th>img</th> 
                        <th>Conditions</th> 
                        <th>Original Price</th> 
                        <th>Sell Price</th> 
                        <th>used</th>
                        <th>status</th>
                        <th>advertise</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody> 
                        {
                            showProducts.map((product,i)=><tr key={product._id}>
                            <th>{i+1}</th> 
                            <td>{product.title}</td> 
                            <td>
                                <PhotoProvider>
                                    <PhotoView src={product?.picture}>
                                        <img src={product?.picture} className="w-8 h-8" alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </td> 
                            <td>{product.Condition}</td> 
                            <td>{product.originalPrice}</td> 
                            <td>{product.resalePrice}</td> 
                            <td>{product.useTime}</td>
                            <td>{product.Status}</td>
                            <td><button type='submit' onClick={()=>handleSubmit(product._id)}  className='btn disabled btn-sm bg-info'> make advertise</button></td>
                            <td><button onClick={()=>handleDelete(product._id)} className='btn btn-sm bg-red-600'>DELETE</button></td>
                            </tr>)
                        }      
                    </tbody> 
                    
                </table>
            </div>
        </div>
    );
};

export default MyProducts;