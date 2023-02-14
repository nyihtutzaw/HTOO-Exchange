import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as AllowanceService from "../../services/allowanceService";
import { setAllowance } from "../../store/reducer.allowance";
import InputForm from "./InputForm";

const EditAllowance = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const allowance = useSelector((state) => state.allowance.allowance);

  const loadData = async () => {
    const response = await AllowanceService.getEach(id);
    dispatch(setAllowance(response.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return <InputForm editData={allowance} />;
};

export default EditAllowance;
