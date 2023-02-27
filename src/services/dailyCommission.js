import { getData } from './apiService'
import { NotificationManager } from 'react-notifications'



export async function getAll(query) {
    try {
        let response = await getData(`daily-comission?${new URLSearchParams(query).toString()}`)
        return response.data;
    } catch (e) {
        NotificationManager.error('Failed')
        return false
    }
}