import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import {GoogleAuthProvider} from 'firebase/auth'
const Login = () => {
    const {signIn, setLoading, setUser, providerLogin, verifyEmail }=useContext(AuthContext);
    const [error, setError] = useState('');
    const googleProvider= new GoogleAuthProvider()

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // google login
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                verifyEmail();
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    // handle submit
    const handleSubmit=event=>{
        event.preventDefault()
        const form=event.target
        const email =form.email.value;
        const password =form.password.value
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                // jwt
                const currentUser={
                    eamil:user.email
                }
                // JWT
                fetch('http://localhost:5000/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(currentUser)
                })
                .then(res=>res.json())
                .then(data=> {
                    console.log(data);
                    localStorage.setItem('ACC_Token',data.token)
                })


                setUser(user)
                form.reset();
                setError('');
                navigate(from, {replace: true});
                toast.success(`welcome  ${email}`)
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
                toast.error(' user name or password wrong')
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handleSubmit} className="card lg:w-1/3 md:w-3/4 md:p-7 p-5 w-full shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center p-3 font-bold">Login now!</h1>
                    <div className="sm:card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        {
                            error
                        }
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-6">
                                <Link to={'/register'} className="w-100 border py-2 rounded-lg bg-warning text-center">Register Here</Link>
                            
                        </div>
                        <div className="form-control mt-6">
                                <div onClick={handleGoogleSignIn} className="w-100 border py-2 rounded-lg bg-info text-center">Sign Up With Google</div>
                            
                        </div>
                    </div>
            </form>
        </div>
    );
};

export default Login;