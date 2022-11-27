import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const ReportModal = ({productModalReport}) => {
    const {picture, resalePrice, location, title, userInfo}=productModalReport
    
    const {user}=useContext(AuthContext)
    const {displayName, email}=user
    const [reportInfo, setReportInfo]=useState({sellerEmail:userInfo?.email,resalePrice,location,picture,title,buyerEmail:user?.email, byerdisplayName:user?.displayName})
    console.log(reportInfo);
    const handleBlur=event=>{
        const FieldName=event.target.name;
        const FieldValue=event.target.value;
        console.log(FieldName, FieldValue);
        const newUser={...reportInfo};
        newUser[FieldName]=FieldValue;
        setReportInfo(newUser);
    }
    
    const handleBookingSubmit=event=>{
        fetch('http://localhost:5000/report',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(reportInfo)
    })
    .then(res=>res.json())
    .then(result=>{
    })

    }
    return (
        <>
          <input type="checkbox" id="Report-modal" className="modal-toggle" />
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
                                        <span className="label-text">Report Here</span>
                                    </label>
                                <input type="text" name='Report' onBlur={handleBlur}  placeholder="Report Here" className="input input-bordered" />
                                </div>
                                
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Report</button>
                                </div>
                            </div>
                    </form>



            
                        <div className="modal-action">
                        <label htmlFor="Report-modal" className="btn">Close</label>
                        </div>
                    </div>
                </div>  
        </>
    );
};

export default ReportModal;