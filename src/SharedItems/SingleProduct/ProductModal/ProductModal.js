import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const ProductModal = ({productModalInfo}) => {
    const {picture, resalePrice,location, title, userInfo, _id}=productModalInfo
    
    const {user}=useContext(AuthContext)
    const {displayName, email}=user
    const [bookingInfo, setBookingInfo]=useState({sellerEmail:userInfo.email, resalePrice, location, picture, title, byerEmail:user?.email, byerdisplayName:user?.displayName})
    console.log(bookingInfo);
    const handleBlur=event=>{
        const FieldName=event.target.name;
        const FieldValue=event.target.value;
        console.log(FieldName, FieldValue);
        const newUser={...bookingInfo};
        newUser[FieldName]=FieldValue;
        setBookingInfo(newUser);
    }
    
    const handleBookingSubmit=event=>{
        fetch('https://bike-resale-server-eta.vercel.app/booking',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(bookingInfo)
    })
    .then(res=>res.json())
    .then(result=>toast.success('Booking successful'))

    }
    const status={
        Status:'sold'
      }
      console.log(status);
      const hendleStatus=(id)=>{
        console.log(id);
        fetch(`https://bike-resale-server-eta.vercel.app/updateProduct/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(status)
        })
        .then(res=>res.json())
    }
    return (
        <>
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <form onSubmit={handleBookingSubmit} className="card my-8  p-5 w-full shadow-2xl bg-base-100">
                        
                            <div className="sm:card-body ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text"  name='title' readOnly placeholder={displayName} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Email</span>
                                    </label>
                                    <input type="text" name='picture' readOnly placeholder={email} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Item Name</span>
                                    </label>
                                    <input type="text"  name='Description' placeholder={title} readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                <input type="text" name='location'  placeholder={resalePrice} readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                <input type="text" name='phoneNumber' onBlur={handleBlur}  placeholder="Phone Number" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Meet Location</span>
                                    </label>
                                <input type="text" name='meetLocation' onBlur={handleBlur}  placeholder="Meet Location" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Meet Time</span>
                                    </label>
                                <input type="text" name='meetTime' onBlur={handleBlur} placeholder="Meet Time" className="input input-bordered" />
                                </div>
                                
                                <div className="form-control mt-6">
                                    <button type='submit' onClick={()=>hendleStatus(_id)} className="btn btn-primary">Booked</button>
                                </div>
                            </div>
                    </form>



            
                        <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Close</label>
                        </div>
                    </div>
                </div>  
        </>
    );
};

export default ProductModal;