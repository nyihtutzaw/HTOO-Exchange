import { getData, sendData } from "./apiService";
import { NotificationManager } from "react-notifications";

export async function store(values) {
    try {
        let response = await sendData("admin", values);
        return response;
    } catch (e) {
        NotificationManager.error("Failed");
        return false;
    }
}

export async function getAll(query) {
    try {
        let response = await getData(`admin?${new URLSearchParams(query).toString()}`);
        return response.data;
    } catch (e) {
        NotificationManager.error("Failed");
        return false;
    }
}

export async function getEach(id) {
    try {
        let response = await getData("admin/" + id);
        return response;
    } catch (e) {
        NotificationManager.error("Failed");
        return false;
    }
}

export async function update(values, id) {
    try {
        let response = await sendData("admin/" + id, values, "PUT");
        return response;
    } catch (e) {
        NotificationManager.error("Failed");
        return false;
    }
}

export async function deleteAdmin(id, values) {
    try {
        let response = await sendData("admin/" + id, values, "DELETE");
        return response;
    } catch (e) {
        NotificationManager.error("Failed");
        return false;
    }
}
