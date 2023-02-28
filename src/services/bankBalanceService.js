import { getData, sendData } from "./apiService";
import { NotificationManager } from "react-notifications";

export async function store(values) {
  try {
    let response = await sendData("bank-balance", values);
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function getAll(query) {
  try {
    let response = await getData(
      `bank-balance?${new URLSearchParams(query).toString()}`
    );
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function getEach(id) {
  try {
    let response = await getData("bank-balance/" + id);
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}
