import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { updateEventAsync,updateEvent } from "../Features/Events/EventSlice";
function EditModal(props) {
  const {user}=useSelector((state)=>state.auth)
  const { newEditEvent, handleEditFormChange,data,onHide } = props;
  const dispatch = useDispatch();

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    // console.log("handleEditFormSubmit",newEditEvent)
  //   dispatch(updateEvent({
  //     id: newEditEvent.id,
  //     title:  newEditEvent.title,
  //     description:  newEditEvent.description,
  //     time:  newEditEvent.time,
  //     date:  newEditEvent.date,
  //     location:  newEditEvent.location,
  // }))

  if(!user){
    console.log("You must be logged in")
    return
  } 
  
    dispatch(updateEventAsync({
        id: newEditEvent.id,
        title:  newEditEvent.title,
        description:  newEditEvent.description,
        time:  newEditEvent.time,
        date:  newEditEvent.date,
        location:  newEditEvent.location,
      })
    );
    onHide()
  };
  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {/* Form id:{newEditEvent.id} */}
          Form 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleEditFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="title">Title : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              id="title"
              name="title"
              value={newEditEvent.title}
              onChange={handleEditFormChange}
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
              value={newEditEvent.description}
              onChange={handleEditFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="date">Date : </Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date"
              id="date"
              name="date"
              value={newEditEvent.date}
              onChange={handleEditFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="time">Time : </Form.Label>
            <Form.Control
              type="time"
              placeholder="Enter time"
              id="time"
              name="time"
              value={newEditEvent.time}
              onChange={handleEditFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="location">Location : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              id="location"
              name="location"
              value={newEditEvent.location}
              onChange={handleEditFormChange}
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
