import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import IExpenseItem from "../models/expense";
import { getAllExpenseItems } from "../services/expense";
import { ExpenseItems } from "./expense-items";
import "bootstrap/dist/css/bootstrap.min.css"

const ExpenseTracker = () => {

    const [expenseItems, setExpenseItems] = useState<IExpenseItem[]>([]);

    useEffect(() => {
        const getAllExpenseItemsInvoker = async () => {
            const responseData = await getAllExpenseItems();
            console.log(responseData);
            setExpenseItems(responseData);
        }

        getAllExpenseItemsInvoker();
    }, []);

    return (
        <Container className="my-4">
            <ExpenseItems expenseItems={expenseItems}></ExpenseItems>
        </Container>
    )
}

export {ExpenseTracker};