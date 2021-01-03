import api from '../ApiConfig'
import { Apis } from "../config/index";
const userReg = async data => {
    try {
        console.log("data: ",data);
        let result = await api.get(Apis.UserRegisterApi, data);
        console.log("result: ",result);
        if (result.data.error) {
            console.log(result.data.error);
            return [];
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
export default {
    userReg,
 }
