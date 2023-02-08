import { useEffect } from "react";
import InputForm from "./InputForm";
import * as EmployeeService from "./../../services/employeeService";
import { setEmployee } from "../../store/reducer.employee";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function EditEmployee() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const employee = useSelector((state) => state.employee.employee);

  const loadData = async () => {
    const response = await EmployeeService.getEach(id);
    dispatch(setEmployee(response.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return <InputForm editData={employee} />;
}

export default EditEmployee;
