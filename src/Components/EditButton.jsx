import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import EditModal from "./EditModal";

function EditButton({data}) {
  const [modalShow, setModalShow] = React.useState(false);
  const [newEditEvent, setEditNewEvent] = useState({
    id:"",
    title: "",
    description: "",
    time: "",
    date: "",
    location: "",
  });
  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    // let newFormData={...newEvent};
    // newFormData[name]=value
    // setNewEvent(newFormData)
    setEditNewEvent({ ...newEditEvent, [name]: value });
  };
  // console.log(newEvent)
  const handeleEditclick=(e)=>{
    e.preventDefault()
    const formValues={
        id:data._id,
        title: data.title,
        description: data.description,
        time: data.time,
        date: data.date,
        location: data.location,
    }
    setEditNewEvent(formValues)
  }
  return (
    <>
      <Button 
      variant="outline-secondary" 
      onClick={(e) =>{
        setModalShow(true)
        handeleEditclick(e)
      }}>
        Edit
      </Button>

      <EditModal 
      show={modalShow} 
      onHide={() => setModalShow(false)}
      handleEditFormChange={ handleEditFormChange}
      newEditEvent={newEditEvent}
      data={data}/>
    </>
  );
}

export default EditButton;
