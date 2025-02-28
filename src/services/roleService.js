import { getData, sendData } from './apiService'
import { NotificationManager } from 'react-notifications'

export async function store(values) {
    try {
        let response = await sendData('role', values)
        return response
    } catch (e) {
        NotificationManager.error('Failed')
        return false
    }
}


export async function getAll(query) {
    try {
        let response = await getData(`role?${new URLSearchParams(query).toString()}`)
        return response.data;
    } catch (e) {
        NotificationManager.error('Failed')
        return false
    }
}

export async function getEach(id) {
    try {
        let response = await getData('role/' + id)
        return response
    } catch (e) {
        NotificationManager.error('Failed')
        return false
    }
}

export async function update(values, id) {
    try {
        let response = await sendData('role/' + id, values, "PUT")
        return response
    } catch (e) {
        NotificationManager.error('Failed')
        return false
    }
}

export async function deleteRole(id, values) {
    try {
      let response = await sendData("role/" + id, values, "DELETE");
      return response;
    } catch (e) {
      NotificationManager.error("Failed");
      return false;
    }
  }