import React from 'react';

const InputCategory = () => {
    const handleSubmit=event=>{
        event.preventDefault()
        const form=event.target
        const category=form.category.value
        const dbCategory={
            category
        }
        fetch('http://localhost:5000/category',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(dbCategory)
            })
            .then(res=>res.json())
            .then(result=>{
            console.log(result)
            form.reset();
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Add Category</span>
                            </label>
                            <input type="Category" name='category' placeholder="Add Category" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add Category</button>
                        </div>
                    </div>
                </form>
        </div>
    );
};

export default InputCategory;