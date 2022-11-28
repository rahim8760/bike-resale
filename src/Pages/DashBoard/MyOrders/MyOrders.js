import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import {AuthContext} from '../../../Context/AuthProvider/AuthProvider'
import axios from "axios";
import { toast } from 'react-toastify';
import useTitle from '../../../Hooks/useTitle';
const MyOrders = () => {
    useTitle('My Order')
    const {user}=useContext(AuthContext)
    const{email, displayName}=user
    console.log(email);

    const [showProducts, setShowProducts]=useState([])
        useEffect(()=>{
            axios
            .get(`https://bike-resale-server-eta.vercel.app/myBooking/${email}`)
            .then((res) => setShowProducts(res.data));
        },[email])

    const handleDelete = id=>{
        const agree =window.confirm('you want to delete')
        if(agree){
            fetch(`https://bike-resale-server-eta.vercel.app/bookingDelete/${id}`,{
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
    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold my-10 bg-success rounded-3xl py-10 uppercase text-center'>this is {displayName} order</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                    <tr>
                        <th>sl</th> 
                        <th>Product Name</th> 
                        <th>Product img</th> 
                        <th>Seller Email</th> 
                        <th>Seller Location</th> 
                        <th>Sell Price</th> 
                        <th>Meet Time</th>
                        <th>Meet Location</th>
                        <th>Phone Number</th>
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
                            <td>{product.sellerEmail}</td> 
                            <td>{product.location}</td> 
                            <td>{product.resalePrice}</td> 
                            <td>{product.meetTime}</td>
                            <td>{product?.meetLocation }</td>
                            <td>{product?.phoneNumber }</td>
                            
                            <td><button onClick={()=>handleDelete(product._id)} className='btn btn-sm bg-red-600'>DELETE</button></td>
                            </tr>)
                        }      
                    </tbody> 
                    
                </table>
            </div>
        </div>
    );
};

export default MyOrders;