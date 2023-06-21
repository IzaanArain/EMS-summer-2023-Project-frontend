import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLoginAsync } from "../Features/Auth/AuthSlice";

const Login = () => {
    const [loginUser, setloginUser] = useState({
        email: "",
        password: "",
      });
      const dispatch=useDispatch()

      const handleLoginOnChange = (e) => {
        const { name, value } = e.target;
        let newFormData = { ...loginUser };
        newFormData[name] = value;
        // setNewUser({ ...newData, [name]: value });
        setloginUser(newFormData);
      };
      //   console.log(loginUser)

      const handleLoginSubmit = async (e) => {
        e.preventDefault();
        // console.log(loginUser)
        dispatch(userLoginAsync(
            {
                email:loginUser.email,
                password:loginUser.password,
            }
        ))
        setloginUser({
            email:"",
            password:""
        })
      }
  return (
   <>
   <div className="loginPage">
   <div className="card bg-dark text-light" style={{width:"50%"}}>
    <div className="card-header">Login Form</div>
    <div className="card-body">
    <Form onSubmit={handleLoginSubmit}> 
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control 
        type="email" 
        id="email"
        name="email"
        value={loginUser.email}
        onChange={handleLoginOnChange}
        placeholder="Enter email" 
        required/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control 
        type="password" 
        id="password"
        name="password"
        value={loginUser.password}
        onChange={handleLoginOnChange}
        placeholder="Password" 
        required/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
   </div>
   </div>
   </>
  )
}

export default Login