interface IExpenseItem{

    payeeName: string,
    product: string,
    price: number,
    date: Date,
    id: number
  }

  export type IExpenseCreateItem = Omit<IExpenseItem, "id">

export default IExpenseItem;