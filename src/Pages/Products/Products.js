import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductModal from '../../SharedItems/SingleProduct/ProductModal/ProductModal';
import SingleProduct from '../../SharedItems/SingleProduct/SingleProduct';

const Products = () => {
    const category=useLoaderData()
    const [productModalInfo, setProductModalInfo]=useState(null)
    return (
        <section>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 my-5'>
        
                {
                    category.map(singleCate=><SingleProduct key={singleCate._id} singleCate={singleCate} setProductModalInfo={setProductModalInfo}></SingleProduct>)
                }
            </div>
                {
                    productModalInfo &&
                    <ProductModal productModalInfo={productModalInfo}></ProductModal>
                }
        </section>
    );
};

export default Products;