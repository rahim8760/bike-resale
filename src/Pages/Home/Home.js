import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../Category/Category';
import AdvertisItems from './AdvertisItems';
import WhyUs from './WhyUs/WhyUs';

const productInfo=[
    {
        picture:'https://img.indianautosblog.com/crop/1200x675/2021/01/19/2021-yamaha-r15-black-indonesia-ebf1.png', 
        name :'Yamaha R15',
        category:'yamaha', 
        location:'Dhaka', 
        resalePrice:'42000', 
        originalPrice:'150000',
        useTime:'2', 
        postedTime:'11/10/2022', 
        userInfo:{
            userId:'3',
            displayName:'Abu Sufian',
            email:'sufian@gamil.com',
            photoURL:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            Status:'Verified',
            role:'seller'
        } 
        
    },
    {
        picture:'https://c.ndtvimg.com/2019-10/5foe9o38_yamaha-mt15_625x300_30_October_19.jpeg', 
        name :'Yamaha M15',
        category:'yamaha', 
        location:'Dhaka', 
        resalePrice:'40000', 
        originalPrice:'550000',
        useTime:'1', 
        postedTime:'05/10/2022', 
        userInfo:{
            userId:'3',
            displayName:'Abbas',
            email:'Abbas@gamil.com',
            photoURL:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            Status:'Verified',
            role:'seller'
        } 
        
    },
    {
        picture:'https://www.motorcyclevalley.com/images/media/tvs-apache-rtr-160-feature-review.jpg', 
        name :'RTR V4',
        category:'TVS', 
        location:'jamalpur', 
        resalePrice:'82000', 
        originalPrice:'180000',
        useTime:'5', 
        postedTime:'6/10/2022', 
        userInfo:{
            userId:'3',
            displayName:'Abu Sufian',
            email:'sufian@gamil.com',
            photoURL:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            Status:'Verified',
            role:'seller'
        } 
        
    },
    {
        picture:'http://productreviewbd.com/wp-content/uploads/2017/05/tvs-apache-rtr-motorcycle-e1495107991185.jpg', 
        name :'TVS Metro',
        category:'TVS', 
        location:'Dhaka', 
        resalePrice:'42000', 
        originalPrice:'150000',
        useTime:'2', 
        postedTime:'11/10/2022', 
        userInfo:{
            userId:'3',
            displayName:'Sufian',
            email:'sufian@gamil.com',
            photoURL:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            Status:'Verified',
            role:'seller'
        } 
        
    },
    {
        picture:'https://images.91wheels.com//assets/b_images/main/models/profile/profile1661766790.jpg', 
        name :'Suzuki GSX-R150 ABS',
        category:'Suzuki', 
        location:'Dhaka', 
        resalePrice:'42000', 
        originalPrice:'150000',
        useTime:'2', 
        postedTime:'11/10/2022', 
        userInfo:{
            userId:'3',
            displayName:'Abbas',
            email:'Abbas@gamil.com',
            photoURL:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            Status:'Verified',
            role:'seller'
        } 
        
    },
    {
        picture:'https://bengalbiker.com/wp-content/uploads/elementor/thumbs/Burgman-Street-125-p86qu4vpidu5ezr16k758nz2ya38x60x3a9mbug8eg.jpg', 
        name :'Suzuki Burgman 125',
        category:'Suzuki', 
        location:'Dhaka', 
        resalePrice:'32000', 
        originalPrice:'150000',
        useTime:'2', 
        postedTime:'11/09/2022', 
        userInfo:{
            userId:'3',
            displayName:'Suzuki',
            email:'Suzuki@gamil.com',
            photoURL:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            Status:'Verified',
            role:'seller'
        } 
        
    },
]
const Home = () => {
    
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-10">
                {
                    productInfo.map((product, i)=><AdvertisItems key={i} product={product}></AdvertisItems>)
                }
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-10">
                {
                    productInfo.map((product, i)=><Category key={i} product={product}></Category>)
                }
            </div>
            <div className='mx-auto'>
                <WhyUs></WhyUs>
            </div>
        </div>
    );
};

export default Home;