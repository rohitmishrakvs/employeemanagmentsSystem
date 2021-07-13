import React from "react";
import LoginPage from "./Auth/LoginPage";
import ListDetails from "./ListDetails";
import { fetchEmployee } from "../services/actions/employeeAction";
import { fetchDepartment } from "../services/actions/departmentAction";
import { useSelector, useDispatch } from "react-redux";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {makeStyles} from  '@material-ui/core'


const useStyles = makeStyles({
    btngroups: {
        margin:10
    }

})


const Dashboard = () => {

  const employees = useSelector((state) => state.employees);
  const departments = useSelector((state) => state.departments);
  console.log(departments,"departments detatails");
  const [state, setState] = React.useState(false);
  const classes = useStyles()

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchEmployee());
  }, []) 
  
  React.useEffect(() => { 
    dispatch(fetchDepartment());
  }, [])

  const onhandleLink = () => {
    setState(true);
  };
  const onhandleLinkDepartment = () => {
    setState(false);
  };
  const link = state ? <ListDetails data={employees} label={"Employee"} /> : <ListDetails data={departments} label={"Departments"}/> ;
  return (
    <div>
      <ButtonGroup disableElevation variant="contained" color="textsecondary" className={classes.btngroups}>
        <Button onClick={onhandleLink}>Employees</Button>
        <Button onClick={onhandleLinkDepartment}>Departments</Button>
      </ButtonGroup>
      <div>{link}</div>
    </div>
  );
};

export default Dashboard;
