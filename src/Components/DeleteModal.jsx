import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux"
import { deleteEventAsync,deleteEvent } from "../Features/Events/EventSlice";

function DeleteModal(props) {
    const {data,onHide}=props
    const dispatch=useDispatch()
    // console.log(data._id)
    const deleteEventHandler=(_id)=>{
      if(!user){
        console.log("You must be logged in")
        return
      }
        dispatch(deleteEvent({id:_id}))
        dispatch(deleteEventAsync({id:_id}))
        onHide()
    }
  return (
    <Modal
      {...props}
    //   size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         <h3 style={{textAlign:"center"}}>Are you sure you want to remove this event?</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{display:"flex",justifyContent:"center"}}>
        <Button variant="danger" style={{margin:"5px"}} onClick={()=>deleteEventHandler(data._id)}>Delete</Button>
        {/* <Button variant="secondary"onClick={props.onHide} style={{margin:"5px"}}>Cancel</Button> */}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
