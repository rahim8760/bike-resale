import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductModal from '../../SharedItems/SingleProduct/ProductModal/ProductModal';
import ReportModal from '../../SharedItems/SingleProduct/ReportModal/ReportModal';
import SingleProduct from '../../SharedItems/SingleProduct/SingleProduct';

const Products = () => {
    const category=useLoaderData()
    const [productModalInfo, setProductModalInfo]=useState(null)
    const [productModalReport, setProductModalReport]=useState(null)
    return (
        <section>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 my-5'>
        
                {
                    category.map(singleCate=><SingleProduct key={singleCate._id} singleCate={singleCate} setProductModalInfo={setProductModalInfo} setProductModalReport={setProductModalReport}></SingleProduct>)
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
        </section>
    );
};

export default Products;