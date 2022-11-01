import { useEffect, useState } from "react";
import { Container, Alert } from "react-bootstrap";
import IExpenseItem from "../models/expense";
import { getAllExpenseItems } from "../services/expense";
import { ExpenseItems } from "./expense-items";
import "bootstrap/dist/css/bootstrap.min.css"

const ExpenseTracker = () => {

    const [expenseItems, setExpenseItems] = useState<IExpenseItem[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getAllExpenseItemsInvoker = async () => {

            try {
                const responseData = await getAllExpenseItems();
                console.log(responseData);
                setExpenseItems(responseData);
            } catch (error){
                setError(error as Error);
            }
            
        }

        getAllExpenseItemsInvoker();
    }, []);

    return (
        <Container className="my-4">
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