import { useEffect, useState } from "react";
import { Container, Alert, Spinner } from "react-bootstrap";
import IExpenseItem from "../models/expense";
import { getAllExpenseItems } from "../services/expense";
import { ExpenseItems } from "./expense-items";
import "bootstrap/dist/css/bootstrap.min.css"
import { ExpenseByPayees } from "./expense-by-payee";
import { ExpenseCreator } from "./expense-creator";

const ExpenseTracker = () => {

    const [expenseItems, setExpenseItems] = useState<IExpenseItem[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getAllExpenseItemsInvoker = async () => {

            try {
                const responseData = await getAllExpenseItems();
                console.log(responseData);
                setExpenseItems(responseData);
                // setLoading(false);
            } catch (error) {
                setError(error as Error);
                //setLoading(false);
            } finally {
                setLoading(false);
            }

        }

        getAllExpenseItemsInvoker();
    }, []);

    const refreshParent = (newExpenseItem : IExpenseItem) => {

        setExpenseItems(
            [
                ...expenseItems,
                newExpenseItem
            ]
        );

    }

    return (
        <Container className="my-4">

            <h2>Expense Management Application
                <ExpenseCreator expenseItems={expenseItems} refreshParent={refreshParent}/>
            </h2>

            {
                loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )
            }

            {
                !error && !loading && (
                    <ExpenseItems expenseItems={expenseItems}></ExpenseItems>
                )
            }

            {
                !error && !loading && (
                    <ExpenseByPayees expenseItems={expenseItems}></ExpenseByPayees>
                )
            }

            {
                error && !loading && (
                    <Alert variant="danger">
                        {error.message}
                    </Alert>
                )
            }
        </Container>
    )
}

export { ExpenseTracker };