import IExpenseItem from "../models/expense"
import Table from 'react-bootstrap/Table';
import {getAllPayeeNames} from '../services/expense-utils';

type ExpenseByPayeesModel = {

    expenseItems: IExpenseItem[];
}
const ExpenseByPayees = ({ expenseItems }: ExpenseByPayeesModel) => {

    const getTotalExpenseByPayee = (payeeName: String) => {

        let totalExpense = 0;

        expenseItems.forEach((expenseItem) => {
            if (expenseItem.payeeName === payeeName) {
                totalExpense += expenseItem.price;
            }
        })

        return totalExpense;
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Payee Name</th>
                    <th>Total Expense</th>
                </tr>
            </thead>
            {
                getAllPayeeNames(expenseItems).map((payeeName, index) => (
                    <tbody>
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{payeeName}</td>
                            <td>{getTotalExpenseByPayee(payeeName)}</td>
                        </tr>
                    </tbody>
                ))
            }

        </Table>
    )
}

export {ExpenseByPayees};