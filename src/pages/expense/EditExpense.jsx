import { useEffect } from "react";
import InputForm from "./InputForm";
import * as ExpenseService from "./../../services/expenseService";
import { setExpense } from "../../store/reducer.expense";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function EditExpense() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const expense = useSelector((state) => state.expense.expense);

  const loadData = async () => {
    const response = await ExpenseService.getEach(id);
    dispatch(setExpense(response.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return <InputForm editData={expense} />;
}

export default EditExpense;
