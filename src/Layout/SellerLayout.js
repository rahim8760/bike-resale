import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../SharedItems/Header/Header';

const SellerLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard_drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard_drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">    
                        <li><Link to="/dashBoard/seller/myProfile">myProfile</Link></li>

                        <li><Link to="/dashBoard/seller/addProduct">Add Product</Link></li>
                        <li><Link to="/dashBoard/seller/myProduct">My Products</Link></li>
                        <li><Link to="/dashBoard/seller/myBuyers">My Buyers</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default SellerLayout;