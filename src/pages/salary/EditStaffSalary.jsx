import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as SalaryService from "../../services/salaryService";
import { setSalary } from "../../store/reducer.salary";
import InputForm from "./inputForm";

const EditStaffSalary = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const salary = useSelector((state) => state.salary.salary);

  const loadData = async () => {
    const response = await SalaryService.getEach(id);
    dispatch(setSalary(response.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return <InputForm editData={salary} />;
};

export default EditStaffSalary;
