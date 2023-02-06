import { useEffect } from "react";
import InputForm from "./InputForm";
import * as BranchService from "./../../services/branchService";
import { setBranch } from "../../store/reducer.branch";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function EditBranch() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const branch = useSelector((state) => state.branch.branch);

  const loadData = async () => {
    const response = await BranchService.getEach(id);
    dispatch(setBranch(response.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return <InputForm editData={branch} />;
}

export default EditBranch;
