import axios from "axios";
import IExpenseItem from "../models/expense";

const getAllExpenseItems = async () => {
    
    const getItemsUrl = "http://localhost:4000/items";
    console.log(getItemsUrl);

    const responseData = await axios.get<IExpenseItem[]>(getItemsUrl);
    return responseData.data;
}

export {getAllExpenseItems};