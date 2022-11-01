import IExpenseItem from "../models/expense";
import Table from 'react-bootstrap/Table';

type ExpenseItemsModel = {

    expenseItems: IExpenseItem[];
}
// const ExpenseItems = (model : ExpenseItemsModel) => {
const ExpenseItems = ({ expenseItems }: ExpenseItemsModel) => {

    return (
        <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Expense Type</th>
                                <th>Payee Name</th>
                                <th>Date</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {
                            expenseItems.map((expenseItem) => (
                                <tbody>
                                    <tr>
                                        <td>{expenseItem.id}</td>
                                        <td>{expenseItem.product}</td>
                                        <td>{expenseItem.payeeName}</td>
                                        {/* <td>{expenseItem.date}</td> */}
                                        <td>{expenseItem.date.toString()}</td>
                                        <td>{expenseItem.price}</td>
                                    </tr>
                                </tbody>
                                ))
                        }
                        
                    </Table>
        </>
    )
}

export { ExpenseItems };