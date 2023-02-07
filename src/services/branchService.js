import { getData, sendData } from "./apiService";
import { NotificationManager } from "react-notifications";

export async function store(values) {
  try {
    let response = await sendData("branch", values);
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function getAll() {
  try {
    let response = await getData("branch");
    return response.data;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function getEach(id) {
  try {
    let response = await getData("branch/" + id);
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function update(values, id) {
  try {
    let response = await sendData("branch/" + id, values, "PUT");
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function deleteBranch(id, values) {
  try {
    let response = await sendData("branch/" + id, values, "DELETE");
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}
