import { DELETE_DEPARTMENT,FETCH_DEPARTMENT,ADD_DEPARTMENT}  from "../actions/Constant";
 
const DepartmentReducers = (state=[],action)=>{
    // console.log(state,"state");
    switch (action.type) {
        
        case FETCH_DEPARTMENT:
            // console.log("Department",action.payload);
            return action.payload
        case ADD_DEPARTMENT:
            // console.log("employeedetails",action.payload);
            return {...state,[action.payload]:action.payload}
    
        default:
            return state
    }
}

export default  DepartmentReducers;