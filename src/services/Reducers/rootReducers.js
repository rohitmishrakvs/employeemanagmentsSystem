import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import EmployeeReducer from './EmployeeReducer'
import DepartmentReducer from './DepartmentReducers'

export default combineReducers({
    // form:formReducer,
    employees:EmployeeReducer,
    departments:DepartmentReducer
})