import { useMemo } from "react";
import { getCache } from "../utils/cache";

const usePermission = (type) => {

    const permitCreate = useMemo(() => {
        const role = JSON.parse(getCache("user")).role;
        const permission = JSON.parse(role.permission);
        if (permission[type].new) {
            return true;
        }
        return false;

    }, [type])

    const permitUpdate = useMemo(() => {
        const role = JSON.parse(getCache("user")).role;
        const permission = JSON.parse(role.permission);
        if (permission[type].edit) {
            return true;
        }
        return false;

    }, [type])

    const permitDelete = useMemo(() => {
        const role = JSON.parse(getCache("user")).role;
        const permission = JSON.parse(role.permission);
        if (permission[type].delete) {
            return true;
        }
        return false;

    }, [type])

    return {
        permitCreate,
        permitUpdate,
        permitDelete
    }

};

export default usePermission;