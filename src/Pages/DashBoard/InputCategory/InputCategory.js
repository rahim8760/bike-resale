import React from 'react';

const InputCategory = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Add Category</span>
                            </label>
                            <input type="Category" placeholder="Add Category" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Category</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default InputCategory;