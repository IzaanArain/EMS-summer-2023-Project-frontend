import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addEventAsync } from "../Features/Events/EventSlice";

const AddForm = () => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    time: "",
    date: "",
    location: "",
  });
  const [error,setError]=useState(null)

  const dispatch = useDispatch();
  const {user}=useSelector((state)=>state.auth)

  const handleAddFormChange = (e) => {
    const { name, value } = e.target;
    // let newFormData={...newEvent};
    // newFormData[name]=value
    // setNewEvent(newFormData)
    setNewEvent({ ...newEvent, [name]: value });
  };
  // console.log(newEvent)

  const addFormHandler = (e) => {
    e.preventDefault();
    if(!user){
      console.log("You must be logged in")
      setError("You must be logged in")
      return
    }
    dispatch(
      addEventAsync({
        title: newEvent.title,
        description: newEvent.description,
        date: newEvent.date,
        time: newEvent.time,
        location: newEvent.location,
      })
    );
    setNewEvent({
      title: "",
      description: "",
      time: "",
      date: "",
      location: "",
    });
  };
  return (
    <>
      <div className="card">
        <h5 className="card-header">Event Form</h5>
        <div className="card-body">
          <Form onSubmit={addFormHandler}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="title">Title : </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                id="title"
                name="title"
                value={newEvent.title}
                onChange={handleAddFormChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="description">Description : </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                id="description"
                name="description"
                value={newEvent.description}
                onChange={handleAddFormChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="date">Date : </Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date"
                id="date"
                name="date"
                value={newEvent.date}
                onChange={handleAddFormChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="time">Time : </Form.Label>
              <Form.Control
                type="time"
                placeholder="Enter time"
                id="time"
                name="time"
                value={newEvent.time}
                onChange={handleAddFormChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="location">Location : </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
                id="location"
                name="location"
                value={newEvent.location}
                onChange={handleAddFormChange}
                required
              />
            </Form.Group>

            <Button
              variant="outline-primary"
              type="submit"
              style={{ width: "100%", fontWeight: "Bolder" }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddForm;
