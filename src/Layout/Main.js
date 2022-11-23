import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedItems/Footer/Footer';
import Header from '../SharedItems/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;