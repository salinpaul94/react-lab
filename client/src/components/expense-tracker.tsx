import { useEffect } from "react";
import { getAllExpenseItems } from "../services/expense";

const ExpenseTracker = () => {

    useEffect(() => {

        const getAllExpenseItemsInvoker = async () => {
            const responseData = await getAllExpenseItems();
            console.log(responseData);
        }

        getAllExpenseItemsInvoker();
        
    }, []);

    return (
        <div>
            Expense Tracker Created...
        </div>
    )
}

export {ExpenseTracker};