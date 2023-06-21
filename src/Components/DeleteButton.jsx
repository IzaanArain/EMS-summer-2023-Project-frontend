import React from 'react'
import Button from 'react-bootstrap/Button';
import DeleteModal from './DeleteModal';

function DeleteButton({data}) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="outline-danger" onClick={() => setModalShow(true)}>
          Delete
        </Button>
  
        <DeleteModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={data}
        />
      </>
    );
  }

export default DeleteButton