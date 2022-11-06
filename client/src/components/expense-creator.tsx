import { Button, Modal, Form } from 'react-bootstrap'
import { FormEvent, useState, useRef } from 'react';
import {getAllPayeeNames, } from '../services/expense-utils';
import IExpenseItem, { IExpenseCreateItem } from "../models/expense"
import {postExpenseItems} from '../services/expense';

type ExpenseCreatorModel = {

  expenseItems: IExpenseItem[];
}
const ExpenseCreator = ({expenseItems}: ExpenseCreatorModel) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const expenseDescriptionRef = useRef<HTMLInputElement>(null);
  const payeeRef = useRef<HTMLSelectElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const handleAddExpense = async (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(`${expenseDescriptionRef?.current?.value}`);
    console.log(`${payeeRef?.current?.value}`);
    console.log(`${priceRef?.current?.value}`);

    const expenseCreateItem : IExpenseCreateItem = {
      payeeName: payeeRef.current?.value as string,
      product: expenseDescriptionRef.current?.value as string,
      price: parseFloat(priceRef.current?.value as string),
      date: new Date()
    }

    const updatedExpenseCreateItm = await postExpenseItems(expenseCreateItem);
    console.log(updatedExpenseCreateItm);
    handleClose();
  }

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
          <Form onSubmit={handleAddExpense}>
            <Form.Group className="mb-3" controlId="expenseDescription">
              <Form.Label>Expense Description</Form.Label>
              <Form.Control type="text" placeholder="Enter expense Description" 
              ref={expenseDescriptionRef}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="payeeName">
              <Form.Label>Payee name</Form.Label>
              <Form.Select aria-label="Default select example" ref={payeeRef}>
                <option>Select Payee Name</option>
                {
                  getAllPayeeNames(expenseItems).map((payeeName) => {
                    return <option value={payeeName}>{payeeName}</option>
                  })  
                }
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="Number" placeholder="Enter the amount" ref={priceRef} />
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