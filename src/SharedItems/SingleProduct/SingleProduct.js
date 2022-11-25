import React from 'react';

const SingleProduct = ({singleCate, setProductModalInfo}) => {
    const{Condition, Description, category, picture, resalePrice, date, location, originalPrice, title, userInfo}=singleCate
    const{displayName, photoURL}=userInfo
    return (
        <div className="card w-100 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" className=' w-full h-[260px]'/></figure>
            <div className="card-body text-center">
                    <div className="card-actions justify-between">
                        <div className="">{originalPrice}</div> 
                        <div className="">{resalePrice}</div>
                    </div>
                    <h2 className="card-title ">{title}</h2>
                    <p className='text-start'>{Description}</p>
                    <div className="card-actions flex-col justify-between">
                        <div className="e">{category}</div> 
                        <div className="">{Condition}</div>
                    </div>
                    <div className="card-actions flex-col justify-between">
                        <div className="">{location}</div> 
                        <div className="">{date}</div>
                    </div>
                    <div className="card-actions justify-start">
                        <img src={photoURL} className='w-9 h-9' alt="" /> 
                        <div className="">{displayName}</div>
                    </div>
                    <div className="card-actions justify-center">
                    <label  onClick={()=>setProductModalInfo(singleCate)} className='btn btn-info' htmlFor="booking-modal">Book Now</label>
                        
                    </div>
            </div>
            {/* The button to open modal */}
                {/* Put this part before </body> tag */}
                
        </div>
    );
};

export default SingleProduct;

