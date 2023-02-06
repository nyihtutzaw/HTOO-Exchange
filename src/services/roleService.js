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


export async function getAll() {
    try {
        let response = await getData('role')
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

