import React, {  useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
const AddProduct = () => {
    const {user}=useContext(AuthContext)
    const{ email, photoURL}=user
    const displayName=user?.displayName
    const userInfo={
        displayName,
        email,
        photoURL
    }
    const date = new Date().toLocaleString()
    const [product, SetProduct]=useState({userInfo, date, Status:'panding',email})
    

    // Handle Submit
   const handleSubmit=(event)=>{
    event.preventDefault()
    
    fetch('http://localhost:5000/product',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(result=>{
        event.target.reset()

    })
    }
    const handleBlur=event=>{
        const FieldName=event.target.name;
        const FieldValue=event.target.value;
        const newUser={...product};
        newUser[FieldName]=FieldValue;
        SetProduct(newUser);
    }
    const [category, setCategory]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
    return (
        <div className="hero min-h-screen my-4 bg-base-200">
            <form onSubmit={handleSubmit} className="card my-8 lg:w-1/3 md:w-3/4 md:p-7 p-5 w-full shadow-2xl bg-base-100">
                    <h1 className="sm:text-5xl text-xl sm:p-5 text-center font-bold">Add Product</h1>
                    <div className="sm:card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" onBlur={handleBlur} name='title' placeholder="title" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photo Url</span>
                            </label>
                            <input type="text" name='picture' onBlur={handleBlur} placeholder='photo Url' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select name='category' onBlur={handleBlur} className="select w-full input input-bordered">
                            <option disabled selected>select Category</option>
                                {
                                    category.map(sC=><option key={sC._id} value={sC.category}>{sC.category}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Condition</span>
                            </label>
                            <select name='Condition' onBlur={handleBlur} className="select w-full input input-bordered">
                                <option disabled selected>select Condition</option>
                                <option value='New' >New</option>
                                <option value='Used' >Used</option>
                                
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" onBlur={handleBlur} name='Description' placeholder="Description" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                        <input type="text" name='location' onBlur={handleBlur} placeholder="Location" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">resalePrice</span>
                            </label>
                        <input type="text" name='resalePrice' onBlur={handleBlur} placeholder="resalePrice" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">originalPrice</span>
                            </label>
                        <input type="text" name='originalPrice' onBlur={handleBlur} placeholder="originalPrice" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">useTime</span>
                            </label>
                        <input type="text" name='useTime' onBlur={handleBlur} placeholder="useTime" className="input input-bordered" />
                        </div>
                        
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </div>
            </form>
        </div>
    );
};

export default AddProduct;

// {
    
//     category:'Suzuki', 
     
    
//     postedTime:'11/09/2022', 
//     userInfo:{
//         userId:'3',
//         displayName:'Suzuki',
//         email:'Suzuki@gamil.com',
//         photoURL:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
//         Status:'Verified',
//         role:'seller'
//     } 