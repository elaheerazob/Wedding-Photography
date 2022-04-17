import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebse.init";
import Social from "../Social/Social";
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../Share/Loading/Loading";

const Login = () => {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    const from = location.state?.from?.pathname || '/';
    
    const handelEmailChange = e =>{
        setEmail(e.target.value);
    }
    
    const handelPasswordChange = e =>{
        setPassword(e.target.value);
    }

    useEffect( () =>{
        if (user) {
            navigate(from, {replace: true});
        }
    },[user])

    if (loading || sending) {
        return <Loading></Loading>
    }

    
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handelLogin = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password);
    }

    // const navigateRegister = event => {
    //     navigate('/signup');
    // }

    const resetPassword = async () => {
        
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }
  return (
    <div className="w-50 mx-auto">
      <Form onSubmit={handelLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handelEmailChange} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handelPasswordChange} type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>New to Wedding Photography? <Link to="/signup" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>

        <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
      <Social></Social>
      <ToastContainer />
    </div>
  );
};

export default Login;
