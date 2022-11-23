import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({product}) => {
    return (
        
        <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
            <Link className="block rounded-xl bg-white p-6 sm:p-8" href="">
                <div className="mt-16 sm:pr-8">
                    <h3 className="text-xl font-bold text-gray-900">{product.category}</h3>

                    <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Category;