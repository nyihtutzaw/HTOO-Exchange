import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as WaveMoneyTransferService from "../../services/waveMoneyTransferService";
import { setWaveMoneyTransfer } from "../../store/reducer.waveMoneyTransfer";
import InputForm from "./InputForm";

const EditWaveMoneyTransfer = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const waveMoneyTransfer = useSelector(
    (state) => state.waveMoneyTransfer.waveMoneyTransfer
  );

  const loadData = async () => {
    const response = await WaveMoneyTransferService.getEach(id);
    dispatch(setWaveMoneyTransfer(response.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return <InputForm editData={waveMoneyTransfer} />;
};

export default EditWaveMoneyTransfer;
