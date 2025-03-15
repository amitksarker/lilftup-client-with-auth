import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { createUser } = useContext(AuthContext);
    const Navigate = useNavigate();

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photoURL = event.target.photoURL.value;
        const password = event.target.password.value;
        console.log('information added', name, email, photoURL, password);

        setErrorMessage('');
        setSuccess(false);

        if (password.length < 6) {
            setErrorMessage('password should be at least 6 characters')
            return
        }
        // uppercase and lower case part
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{8,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('Must have an Uppercase letter and a Lowercase letter in the password');
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(true);
                Navigate('/')
                const createAt = result?.user?.metadata?.creationTime;
                const newUser = {name , email, photoURL, password, createAt}
                return fetch('http://localhost:5000/users', {  // 🟢 return fetch() to chain it properly
                    method: 'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                .then(response => response.json())  // ✅ response is now properly passed
                .then(data =>{
                    console.log('user created to db', data)
                    if (data.insertedId) {
                        Swal.fire({
                            title: "Good job!",
                            text: "You Account SuccessFully Open!",
                            icon: "success"
                          });
                    }
                })

            })
            .catch(error =>{
                console.log('error hoiya gase', error)
                setErrorMessage(error.message);
                setSuccess(false);
            })

                    
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleRegister} >
                        <fieldset className="fieldset">
                        <label className="fieldset-label">Name</label>
                        <input type="text" className="input" placeholder="Name" name='name' />
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email' />
                        <label className="fieldset-label">PhotoURL </label>
                        <input type="text" className="input" placeholder="PhotoURL" name='photoURL' />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password'/>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    {
                        errorMessage && <p className='font-bold text-red-600'> {errorMessage} </p>
                    }
                    {
                        success && <p className='font-bold text-green-500'> Sign Up Successfull </p>
                    }
                    {/* <button className="btn mt-2">Google Login </button>
                    <button className="btn ">GitHub Login </button> */}
                    <div className="divider"></div>
                    <p className='text-center'>
                If you have an account please <Link to='/Login'> <span className='font-semibold text-orange-500'>login</span> </Link>
                    </p>
                </div>
                </div> 

                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register Now</h1>
                <p className="py-6">
                You also agree to our use of cookies and other technologies that monitor your use of the Site.Your interactions on the Site may be recorded or monitored by us or a third party with which we work.
                </p>
                </div>
            </div>
        </div>
    );
};

export default Register;