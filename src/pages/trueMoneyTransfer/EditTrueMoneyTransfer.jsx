import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as TrueMoneyTransferService from "../../services/trueMoneyTransferService";
import { setTrueMoneyTransfer } from "../../store/reducer.trueMoneyTransfer";
import InputForm from "./InputForm";

const EditTrueMoneyTransfer = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const trueMoneyTransfer = useSelector(
    (state) => state.trueMoneyTransfer.trueMoneyTransfer
  );

  const loadData = async () => {
    const response = await TrueMoneyTransferService.getEach(id);
    dispatch(setTrueMoneyTransfer(response.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return <InputForm editData={trueMoneyTransfer} />;
};

export default EditTrueMoneyTransfer;
