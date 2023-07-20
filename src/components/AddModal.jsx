import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddModal({ show, handleClose, cityName, setDestinations, destinations }) {
  const [pName, setPName] = useState("")
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  const handleSubmit = (e) => {
    e.preventDefault()
    setDestinations([...destinations,
    {
      id: new Date().getTime(),
      visitor: pName,
      day: date,
      visited: false,
      city: cityName,
    },])
    setPName("")
    handleClose()

  }

  console.log(destinations)

 
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book a trip to {cityName} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter name" 
                onChange={(e) => setPName(e.target.value)}
                value={pName}
                required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date</Form.Label>
              <Form.Control 
                type="date" 
                placeholder="Date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
                />
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