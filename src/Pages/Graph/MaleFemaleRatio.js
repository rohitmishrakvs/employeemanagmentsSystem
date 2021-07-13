import React,{useState,useEffect} from "react";
import { Pie } from 'react-chartjs-2'



const MaleFemaleRatio = ({count,employee}) => {
  
  return (
  
      <Pie
        data={{
          labels: ["Male", "Female"],
          datasets: [
            {
                label: 'Male/Female Ratio',
                data: [((count*100)/employee.length),100-((count*100)/employee.length)],
                backgroundColor: ['rgba(153, 102, 255, 0.2)','rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(153, 102, 255, 0.2)','rgb(255, 99, 132)'],
                pointBackgroundColor: 'rgb((0,128,0,0)'
            }
        ]
        }}
      />
  );
};

export default MaleFemaleRatio;
