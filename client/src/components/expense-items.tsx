import IExpenseItem from "../models/expense";

type ExpenseItemsModel = {

    expenseItems : IExpenseItem[];
}
// const ExpenseItems = (model : ExpenseItemsModel) => {
const ExpenseItems = ({expenseItems} : ExpenseItemsModel) => {

    return (
        <>
        {
            expenseItems.map((expenseItem) => (
                <div>
                    {expenseItem.product} - {expenseItem.price}
                </div>
            ))
        }
        </>
    )
}

export {ExpenseItems};