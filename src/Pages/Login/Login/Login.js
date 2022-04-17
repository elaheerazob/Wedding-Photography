import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebse.init";

const Login = () => {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
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
    

    const handelSubmit = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
  return (
    <div className="w-50 mx-auto">
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handelEmailChange} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handelPasswordChange} type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
