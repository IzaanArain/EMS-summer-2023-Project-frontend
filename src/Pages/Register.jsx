import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegisterAsync } from "../Features/Auth/AuthSlice";

const Register = () => {
  const [newUser, setNewUser] = useState({
    fname:"",
    lname:"",
    email: "",
    password: "",
  });

  const dispatch=useDispatch()

  const handleRegisterOnChange = (e) => {
    const { name, value } = e.target;
    // let newFormData = { ...loginUser };
    // newFormData[name] = value;
    setNewUser({ ...newUser, [name]: value });
    // setNewUser(newFormData);
  };
    // console.log(newUser)

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    console.log("handleRegisterSubmit: ",newUser)
    dispatch(userRegisterAsync({
      fname:newUser.fname,
      lname:newUser.lname,
      email:newUser.email,
      password:newUser.password
    }))
    setNewUser({
      fname:"",
      lname:"",
      email: "",
      password: "",
    })
  }
return (
<>
<div className="registerPage">
<div className="card" style={{width:"50%"}}>
<div className="card-header">Register Form</div>
<div className="card-body">
<Form onSubmit={handleRegisterSubmit}> 

  <Form.Group className="mb-3">
    <Form.Label htmlFor="fname">first name</Form.Label>
    <Form.Control 
    type="text" 
    id="fname"
    name="fname"
    value={newUser.fname}
    onChange={handleRegisterOnChange}
    placeholder="Enter first name" 
    required/>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label htmlFor="lname">last name</Form.Label>
    <Form.Control 
    type="text" 
    id="lname"
    name="lname"
    value={newUser.lname}
    onChange={handleRegisterOnChange}
    placeholder="Enter last name" 
    required/>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label htmlFor="email">Email address</Form.Label>
    <Form.Control 
    type="email" 
    id="email"
    name="email"
    value={newUser.email}
    onChange={handleRegisterOnChange}
    placeholder="Enter email" 
    required/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label htmlFor="password">Password</Form.Label>
    <Form.Control 
    type="password" 
    id="password"
    name="password"
    value={newUser.password}
    onChange={handleRegisterOnChange}
    placeholder="enter Password" 
    required/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Register
  </Button>
</Form>
</div>
</div>
</div>
</>
)
}

export default Register