import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../SharedItems/Header/Header';

const AdminLayout = () => {
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
                        <li><Link to="/dashBoard/admin/myProfile">myProfile</Link></li>
                        <li><Link to="/dashBoard/admin/advertisement">Show Advertisement</Link></li>
                        <li><Link to="/dashBoard/admin/seller">User Information</Link></li>
                        <li><Link to="/dashBoard/admin/inputCategory">Category Input</Link></li>
                        <li><Link to="/dashBoard/admin/userReport">User Reports</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default AdminLayout;