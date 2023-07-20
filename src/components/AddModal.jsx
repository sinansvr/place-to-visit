import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddModal({show,handleClose}) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book a trip to ... </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Date" />
      </Form.Group>

      <div className='text-center'>
        <Button className='me-2' variant="primary" type="submit" >
        Save
        </Button>
        <Button variant="danger" type="submit" onClick={handleClose}>
        Close
        </Button>
      </div>
      
      
    </Form>
    </Modal.Body>
        
      </Modal>
    </>
  );
}

export default AddModal;