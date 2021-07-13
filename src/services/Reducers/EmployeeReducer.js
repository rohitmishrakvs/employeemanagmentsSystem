import { ADD_EMPLOYEE , DELETE_EMPLOYEE , FETCH_EMPLOYEES } from "../actions/Constant";
 
const EmployeeReducer = (state=[],action)=>{
    // console.log(state,"state Reducer");
    switch (action.type) {
        
        case FETCH_EMPLOYEES:
            // console.log("employeedetails",action.payload);
            return  action.payload
        case ADD_EMPLOYEE:
            // console.log("employeedetails",action.payload);
            return {...state,[action.payload]:action.payload}
    
        default:
            return state
    }
}

export default  EmployeeReducer;