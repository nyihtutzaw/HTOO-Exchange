import { useEffect } from "react";
import InputForm from "./InputForm";
import * as RoleService from "./../../services/roleService";
import { setRole } from "../../store/reducer.role";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function EditRoleAccess() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const role = useSelector((state) => state.role.role);

  const loadData = async () => {
    const response = await RoleService.getEach(id);
    dispatch(setRole(response.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return <InputForm editData={role} />;
}

export default EditRoleAccess;
