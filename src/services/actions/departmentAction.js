import { DELETE_DEPARTMENT,FETCH_DEPARTMENT,ADD_DEPARTMENT} from "./Constant";
import api from "../../apis/api"

export const addDepartmet = (data) => async (dispatch) => {
    console.log(data,"action Data");
    const response = await api.post(`/departments`,{...data})
    dispatch({type: ADD_DEPARTMENT,payload:response.data})
}
export const fetchDepartment = () => async (dispatch) => {
    const response = await api.get(`/departments`)
    dispatch({type: FETCH_DEPARTMENT,payload:response.data})
}