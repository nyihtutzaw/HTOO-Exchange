import { getData, sendData } from "./apiService";
import { NotificationManager } from "react-notifications";

export async function store(values) {
    try {
        let response = await sendData("bank-account", values);
        return response;
    } catch (e) {
        NotificationManager.error("Failed");
        return false;
    }
}

export async function getAll(query) {
    try {
        let response = await getData(`bank-account?${new URLSearchParams(query).toString()}`);
        return response.data;
    } catch (e) {
        NotificationManager.error("Failed");
        return false;
    }
}

export async function getEach(id) {
    try {
        let response = await getData("bank-account/" + id);
        return response;
    } catch (e) {
        NotificationManager.error("Failed");
        return false;
    }
}

export async function update(values, id) {
    try {
        let response = await sendData("bank-account/" + id, values, "PUT");
        return response;
    } catch (e) {
        NotificationManager.error("Failed");
        return false;
    }
}

export async function deleteBank(id, values) {
    try {
        let response = await sendData("bank-account/" + id, values, "DELETE");
        return response;
    } catch (e) {
        NotificationManager.error("Failed");
        return false;
    }
}

export async function addMoney(values, id) {
    try {
        let response = await sendData("add-to-bank-account/" + id, values, "PUT");
        return response;
    } catch (e) {
        NotificationManager.error("Failed");
        return false;
    }
}


