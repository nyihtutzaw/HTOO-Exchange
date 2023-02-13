import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as AdminService from "../../services/adminService";
import { setAdmin } from "../../store/reducer.admin";
import InputForm from "./InputForm";

const EditAdmin = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const admin = useSelector((state) => state.admin.admin);

  const loadData = async () => {
    const response = await AdminService.getEach(id);
    dispatch(setAdmin(response.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return <InputForm editData={admin} />;
};

export default EditAdmin;
