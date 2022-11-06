import { Button, Modal, Form } from 'react-bootstrap'
import { useState } from 'react';
const ExpenseCreator = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className='float-end' onClick={handleShow}>
        New Expense Item
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new expense item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="expenseDescription">
              <Form.Label>Expense Description</Form.Label>
              <Form.Control type="text" placeholder="Enter expense Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="payeeName">
              <Form.Label>Payee name</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Payee Name</option>
                <option value="Ramesh">Ramesh</option>
                <option value="Rahul">Rahul</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="Number" placeholder="Enter the amount" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add expense
            </Button>

            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export { ExpenseCreator };