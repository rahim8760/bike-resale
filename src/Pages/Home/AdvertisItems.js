import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisItems = ({product}) => {
    return (
        <div>
            <Link href="" class="group relative block h-96">
                <span class="absolute inset-0 border-2 border-dashed border-black"></span>

                <div class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div class="px-8 pb-8 transition-opacity w-full  group-hover:absolute group-hover:opacity-0">
                    <img src={product.picture} className="w-full mx-auto h-[250px]" alt="" />

                    <h2 class="mt-4 text-2xl font-medium">{product.name}</h2>
                    </div>

                    <div class="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
                    <h3 class="mt-4 text-2xl font-medium">{product.name}</h3>

                    <p class="mt-4"> Company : {product.category}</p>
                    <p class="mt-4">Location : {product.location}</p>
                    <p class="mt-4">Selling Price : $ {product.resalePrice}</p>

                    <button class="mt-8 font-bold btn btn-sm text-white bg-secondary">View Details</button>
                    </div>
                </div>
                </Link>
        </div>
    );
};

export default AdvertisItems;