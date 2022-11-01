import { useEffect, useState } from "react";
import { Container, Alert, Spinner } from "react-bootstrap";
import IExpenseItem from "../models/expense";
import { getAllExpenseItems } from "../services/expense";
import { ExpenseItems } from "./expense-items";
import "bootstrap/dist/css/bootstrap.min.css"

const ExpenseTracker = () => {

    const [expenseItems, setExpenseItems] = useState<IExpenseItem[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] =  useState<boolean>(true);

    useEffect(() => {
        const getAllExpenseItemsInvoker = async () => {

            try {
                const responseData = await getAllExpenseItems();
                console.log(responseData);
                setExpenseItems(responseData);
                // setLoading(false);
            } catch (error){
                setError(error as Error);
                //setLoading(false);
            } finally {
                setLoading(false);
            }
            
        }

        getAllExpenseItemsInvoker();
    }, []);

    return (
        <Container className="my-4">
            {
                loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )
            }

            {
                error && (
                    <Alert variant="danger">
                    {error.message}
                    </Alert>
                )
            }

            {
                !error && (
                    <ExpenseItems expenseItems={expenseItems}></ExpenseItems>
                )
            } 
        </Container>
    )
}

export {ExpenseTracker};