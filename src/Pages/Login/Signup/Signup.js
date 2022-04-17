import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebse.init";
import Social from "../Social/Social";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading
      ] = useCreateUserWithEmailAndPassword(auth);

    
    
      const handleEmailChange = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordChange = event =>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordChange = event =>{
        setConfirmPassword(event.target.value);
    }

    const navigate = useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user])


    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your two passwords did not match');
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
        
        createUserWithEmailAndPassword(email, password);
    }
  return (
    <div className="w-50 mx-auto">
      <Form onSubmit={handleCreateUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleEmailChange}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={handleConfirmPasswordChange}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <p style={{color: 'red'}}>{error}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Social></Social>
      </Form>
    </div>
  );
};

export default Signup;
