import { getData, sendData } from "./apiService";
import { NotificationManager } from "react-notifications";

export async function store(values) {
  try {
    let response = await sendData("branch-to-branch-transfer", values);
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function getAll(query) {
  try {
    let response = await getData(`branch-to-branch-transfer?${new URLSearchParams(query).toString()}`);
    return response.data;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function getEach(id) {
  try {
    let response = await getData("branch-to-branch-transfer/" + id);
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function update(values, id) {
  try {
    let response = await sendData("branch-to-branch-transfer/" + id, values, "PUT");
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function deleteBranchTransfer(id, values) {
  try {
    let response = await sendData("branch-to-branch-transfer/" + id, values, "DELETE");
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}
