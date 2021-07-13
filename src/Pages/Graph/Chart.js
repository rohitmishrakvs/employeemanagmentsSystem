import React from "react";
import MaleFemaleRatio from "./MaleFemaleRatio";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { fetchEmployee } from '../../services/actions/employeeAction'
import { useSelector ,useDispatch} from 'react-redux'
import BarChart from './BarChart'
const useStyles = makeStyles({
  maindiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centerdiv: {
    width: 400,
    heigth:'100%',
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
  piebox:{
    width: "400px",
    height: "450px",
    padding:30 
  }
});

const Chart = () => {
  const employee = useSelector(state => state.employees)
  const dispatch = useDispatch()
  const [count,setcount] = React.useState(0)


  
 const render = ()=>{ dispatch(fetchEmployee());}
 console.log(employee,"chart employee"); 


  React.useEffect(() => {
     let number = 0
     console.log(employee,"efect employee");
     employee.map((employee)=>{
         if(employee.gender === 'male'){
             number = number + 1;
         }
     })
     setcount(number)
  })


  console.log(employee,"state data");
  const classes = useStyles();

  if(employee.length===0){
      return <div>{render()}Loading....</div>
  }


  return (
    <div className={classes.maindiv}>
      <Box
        boxShadow={5}
        bgcolor="background.paper"
        m={1}
        p={1}
        className={classes.piebox}
      >
        <div className={classes.centerdiv}> 
        <BarChart/>
        </div>
      </Box>
      <Box
        boxShadow={5}
        bgcolor="background.paper"
        m={1}
        p={1}
        className={classes.piebox}
      >
        <div className={classes.centerdiv}>
          <MaleFemaleRatio employee={employee}  count={count}/>
        </div>
      </Box>
    </div>
  );
};

export default Chart;
