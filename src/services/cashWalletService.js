import { getData, sendData } from "./apiService";
import { NotificationManager } from "react-notifications";

export async function store(values) {
  try {
    let response = await sendData("cash-wallet", values);
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function getAll(query) {
  try {
    let response = await getData(
      `cash-wallet?${new URLSearchParams(query).toString()}`
    );
    return response.data;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function getEach(id) {
  try {
    let response = await getData("cash-wallet/" + id);
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function deposit(values, id) {
  try {
    let response = await sendData("cash-wallet-deposit/" + id, values, "PUT");
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function withdraw(values, id) {
  try {
    let response = await sendData("cash-wallet-withdraw/" + id, values, "PUT");
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}
