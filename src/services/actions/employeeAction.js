import { ADD_EMPLOYEE , DELETE_EMPLOYEE , FETCH_EMPLOYEES } from "./Constant";
import api from "../../apis/api"


export const fetchEmployee= () => async dispatch => {
   
    const response = await api.get('/employees');
    // console.log("fetch detaing",response.data);
    dispatch({type: FETCH_EMPLOYEES,payload: response.data})
}

export const setEmployee = (data) => async dispatch => {
    console.log(data,"action data");
    const response = await api.post(`/employees`,{...data})
    // console.log(response.data,"add action data");
    dispatch({type: ADD_EMPLOYEE,payload: response.data})
}