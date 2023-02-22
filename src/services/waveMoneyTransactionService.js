import { getData, sendData } from "./apiService";
import { NotificationManager } from "react-notifications";

export async function store(values) {
  try {
    let response = await sendData("wave-money-transaction", values);
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function getAll(query) {
  try {
    let response = await getData(
      `wave-money-transaction?${new URLSearchParams(query).toString()}`
    );
    return response.data;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function getEach(id) {
  try {
    let response = await getData("wave-money-transaction/" + id);
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function update(values, id) {
  try {
    let response = await sendData(
      "wave-money-transaction/" + id,
      values,
      "PUT"
    );
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}

export async function deleteWaveMoneyTransaction(id, values) {
  try {
    let response = await sendData(
      "wave-money-transaction/" + id,
      values,
      "DELETE"
    );
    return response;
  } catch (e) {
    NotificationManager.error("Failed");
    return false;
  }
}
