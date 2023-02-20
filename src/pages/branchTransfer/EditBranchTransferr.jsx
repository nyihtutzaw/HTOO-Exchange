import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as BranchTransferService from "../../services/branchTransferService";
import { setBranchTransfer } from "../../store/reducer.branchTransfer";

import InputForm from "./InputForm";

const EditBranchTransfer = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const branchTransfer = useSelector((state) => state.branchTransfer.branchTransfer);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const response = await BranchTransferService.getEach(id);
    dispatch(setBranchTransfer(response.data));
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!loading) return <InputForm editData={branchTransfer} />;

  return <></>;
};

export default EditBranchTransfer;
