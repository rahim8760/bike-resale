import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const Register = () => {
    useTitle('Register')
    const { createUser,setUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState('');
    
    // use navigate
    const navigate=useNavigate()
    const location = useLocation();
    const forms = location.state?.from?.pathname || '/';
    const [dbUser, SetDbUser]=useState({userStatus:'unverify'})

    // Handle Submit

   const handleSubmit=(event)=>{
    event.preventDefault()
    const form = event.target;
    const displayName=form.displayName.value
    const email=form.email.value
    const password=form.password.value
    const photo=form.userPhoto.files[0]

    fetch('https://bike-resale-server-eta.vercel.app/users',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(dbUser)
    })
    .then(res=>res.json())
    .then(result=>{
    })

    // image bb start
    const formData=new FormData()
    formData.append('image', photo)

    fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImageKey}`,{
        method:'POST',
        body:formData
    })
    .then(res=>res.json())
    .then(data=>{
        if(data?.data?.url){
            const imagUrl=data.data.url;
            createUser(email, password)
            .then(result => {
                const user = result.user;
                const userinfo={
                    displayName,
                    photoURL:imagUrl,
                };
                updateUserProfile(userinfo)
                setUser(user);
                setError('');
                getUserToken(email)
                form.reset();
                toast.success(`Welcome ${displayName}`)
                navigate(forms,{replace: true})
                
                
            })
            .catch(err => {
                setError('User All Ready Exist');
                toast.error('User All Ready Exist')
            });
        }

    })
    .catch(er=>console.log(er))
    }
    
    const handleBlur=event=>{
        const FieldName=event.target.name;
        const FieldValue=event.target.value;
        const newUser={...dbUser};
        newUser[FieldName]=FieldValue;
        SetDbUser(newUser);
    }

    // jwt
    const getUserToken=email=>{
        fetch(`https://bike-resale-server-eta.vercel.app/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.access_Token){
                localStorage.setItem('accessToken', data.access_Token)
                navigate(forms,{replace: true})
            }
        })
    }
    return (
        <div className="hero min-h-screen my-4 bg-base-200">
            <form onSubmit={handleSubmit} className="card my-8 lg:w-1/3 md:w-3/4 md:p-7 p-5 w-full shadow-2xl bg-base-100">
                    <h1 className="sm:text-5xl text-xl sm:p-5 text-center font-bold">Register Here</h1>
                    <div className="sm:card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" onBlur={handleBlur} name='displayName' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photo</span>
                            </label>
                            <input type="file" name='userPhoto' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">role</span>
                            </label>
                            <select name='role' onBlur={handleBlur} className="select w-full input input-bordered">
                                <option value='User'>User</option>
                                <option value='Seller'>Seller</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" onBlur={handleBlur} name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                        {error}
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </div>
            </form>
        </div>
    );
};

export default Register;


