import api from '../../ApiConfig'
import { Apis } from "../../config";

const getUser = async data => {
    try {
        let result = await api.get(Apis.GetAllUser);
        if (result.data.error) {
            //NotificationManager.error(result.data.error);
            return [];
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
const createUser = async data => {
    try {
        let result = await api.post(Apis.Createuser, data);
        if (result.data.error) {
            //NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
const updateUser = async data => {
    try {
        let result = await api.put(Apis.UpdateUser, data);
        if (result.data.error) {
            //NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
const remvoeUser = async id => {
    try {
        let result = await api.delete(`${Apis.RemoveUser}/${id}`);
        if (result.data.error) {
            //NotificationManager.error(result.data.error);
            return false;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return false;
    }
}
const userActiveDeactive = async data => {
    try {
        //data.date = moment(data.date).toISOString();
        let result = await api.post(Apis.UserActiveDeactive, data);
        if (result.data.error) {
            //NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export default {
    getUser,
    createUser,
    updateUser,
    remvoeUser,
    userActiveDeactive
}