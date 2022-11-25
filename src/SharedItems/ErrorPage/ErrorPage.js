import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/edceab155269671.Y3JvcCwyMTQxLDE2NzUsNDcsMA.png" alt="" />
          <div className='max-w-md text-center'>
            
            <p className='text-2xl font-semibold md:text-3xl mb-8'>
              Opps! something is wrong......... 
            </p>
            <Link
              to='/'
              className='px-8 py-3 font-semibold rounded bg-orange-300 text-gray-900'
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
        </div>
    );
};

export default ErrorPage;