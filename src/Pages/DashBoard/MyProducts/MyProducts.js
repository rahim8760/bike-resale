import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import {AuthContext} from '../../../Context/AuthProvider/AuthProvider'
const MyProducts = () => {
    const {user}=useContext(AuthContext)
    console.log(user);
    const{email}=user
    const { data: products = [] } = useQuery({
        queryKey: ['appointmentOptions', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProduct/${email}`);
            const data = await res.json();
            return data
        }
    });
    useEffect(()=>{

    },[])
    return (
        <div>
            <div>
                <h1>this is my  product</h1>
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
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody> 
                        {
                            products.map((product,i)=><tr key={product._id}>
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
                            <td><button className='btn btn-sm bg-red-600'>DELETE</button></td>
                            </tr>)
                        }      
                    </tbody> 
                    
                </table>
            </div>
        </div>
    );
};

export default MyProducts;