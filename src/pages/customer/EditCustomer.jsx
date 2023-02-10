import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as CustomerService from "./../../services/customerService";
import { setCustomer } from "../../store/reducer.customer";
import InputForm from "./InputForm";

const EditCustomer = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const customer = useSelector((state) => state.customer.customer);

  const loadData = async () => {
    const response = await CustomerService.getEach(id);
    dispatch(setCustomer(response.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return <InputForm editData={customer} />;
};

export default EditCustomer;
