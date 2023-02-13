import { sendData, getData } from './apiService'
import { NotificationManager } from 'react-notifications'
import { storeCache, removeCache } from '../utils/cache'

export async function login(values) {
    try {
        let response = await sendData('admin/login', values)
        storeCache('user', JSON.stringify(response.data.admin))
        storeCache("activeBranch", JSON.stringify(response.data.admin.employee.branches[0]))
        storeCache('access_token', response.data.token)
        return response
    } catch (e) {
        NotificationManager.error('Login Failed')
        return false
    }
}

export function logout() {
    removeCache('user')
    removeCache('access_token')
}

export async function getPermssion() {
    try {
        let response = await getData('user-roles/get-role')
        return response;
    } catch (e) {
        NotificationManager.error('Opps. Something wrong')
        return false
    }
}
