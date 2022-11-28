import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductModal from '../../SharedItems/SingleProduct/ProductModal/ProductModal';
import ReportModal from '../../SharedItems/SingleProduct/ReportModal/ReportModal';
import SingleProduct from '../../SharedItems/SingleProduct/SingleProduct';
import Category from '../Category/Category';
import WhyUs from './WhyUs/WhyUs';
// import axios from 'axios'

const Home = () => {
    const [category, setCategory]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
    const [productInfo, setProductInfo]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${'approved'}`)
        .then(res=>res.json())
        .then(data=>setProductInfo(data))
    },[])

    const [productModalInfo, setProductModalInfo]=useState(null)
    const [productModalReport, setProductModalReport]=useState(null)
    return (
        <div>
            <section className="relative bg-[url(https://c.ndtvimg.com/2019-10/5foe9o38_yamaha-mt15_625x300_30_October_19.jpeg)] bg-cover bg-center bg-no-repeat">
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Dream Come True

                        <strong className="block font-extrabold text-rose-700">
                        Let's Raid !
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                        
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <Link
                        href="#"
                        className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                        Book Now
                        </Link>
                    </div>
                    </div>
                </div>
            </section>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10">
                {
                    productInfo.map(singleCate=><SingleProduct key={singleCate._id} singleCate={singleCate} setProductModalReport={setProductModalReport} setProductModalInfo={setProductModalInfo}></SingleProduct>)
                }
            </div>
                {
                    productModalInfo &&
                    <ProductModal productModalInfo={productModalInfo}></ProductModal>
                }
                {
                    productModalReport &&
                    <ReportModal productModalReport={productModalReport} ></ReportModal>
                }
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-10">
                {
                    category.map((product, i)=><Category key={i} product={product}></Category>)
                }
            </div>
            <div className='mx-auto'>
                <WhyUs></WhyUs>
            </div>
        </div>
    );
};

export default Home;