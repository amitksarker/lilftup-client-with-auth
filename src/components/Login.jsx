import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const Navigate = useNavigate();
    const { loginUser, signWithGoogle, signWithGithub } = useContext(AuthContext);
    const handleSignIn = e =>{
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        console.log(password, email);
        setErrorMessage('');
        setSuccess(false);
        
        if (password.length < 6) {
            setErrorMessage('password should be at least 6 characters')
            return
        }
        // uppercase and lower case part
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if(!passwordRegex.test(password)){
            setErrorMessage('at least one upper and one lower case letter and others info please added')
        }


        loginUser(email,password)
        .then(result =>{
            console.log(result.user);
            setSuccess(true);
            e.target.reset();
            Navigate('/')
            
            // last login time
            const lastSignInTime = result.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime };

            fetch(`http://localhost:5000/users/${email}`,{
                method: "PATCH",
                headers: {
                     'content-type': 'appliction/json'
                },
                body: JSON.stringify(loginInfo)
            })
            .then( res => res.json())
            .then(data =>{
                console.log('sign in info updated', data)
                
            })



        })
        .catch(error =>{
            console.log(error);
            setErrorMessage(error.message);
            setSuccess(false);
        })
    }

    const handleGoogleSignIn = () =>{
        signWithGoogle()
        .then(result =>{
            console.log(result.user);
            Navigate('/');
        })
        .catch(error => console.log('error', error.message))
    }
    const handleGithubSignIn = () =>{
        signWithGithub()
        .then(result =>{
            console.log(result.user);
            Navigate('/');
        })
        .catch(error => console.log('error', error.message))
      
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                LoginNow allows students to develop their communication skills using easy-to-follow tasks and instructions, real-life situations, and real-world topics.
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSignIn}> 
                        <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email'/>
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password' />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    {
                        errorMessage && <p className='font-bold text-red-600'> {errorMessage} </p>
                    }
                    {
                        success && <p className='font-bold text-green-500'> Sign Up Successfull </p>
                    }
                    <button onClick={handleGoogleSignIn} className="btn mt-2">Google Login </button>
                    <button onClick={handleGithubSignIn} className="btn ">GitHub Login </button>
                    <div className="divider"></div>
                    <p className='text-center'>
                    If you don't have an account please <Link to='/Register'> <span className='font-semibold text-orange-400'>Register</span> </Link>
                    </p>
                </div>
                
                </div>
            </div>
        </div>
    );
};

export default Login;