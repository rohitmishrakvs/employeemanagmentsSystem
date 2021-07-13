import React from 'react';
import ChartistGraph from 'react-chartist';

var Chartist = require("chartist");

var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

  
class BarChart extends React.Component {
  render() {
   
    const dailyAddedEmployees = {
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        series: [[12, 17, 7, 17, 23, 18, 38]],
      },
      options: {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0,
        }),
        low: 0,
        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      // for animation
      animation: {
        draw: function (data) {
          if (data.type === "line" || data.type === "area") {
            data.element.animate({
              d: {
                begin: 600,
                dur: 700,
                from: data.path
                  .clone()
                  .scale(1, 0)
                  .translate(0, data.chartRect.height())
                  .stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint,
              },
            });
          } else if (data.type === "point") {
            data.element.animate({
              opacity: {
                begin: (data.index + 1) * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: "ease",
              },
            });
          }
        },
      },
    };


    return (
      <div>
        <ChartistGraph
                // className="ct-chart"
                style={{width:400,height:400 ,backgroundColor:"rgba(153, 102, 255, 0.2" , color:"red"}}
                data={dailyAddedEmployees.data}
                type="Line"
                options={dailyAddedEmployees.options}
                listener={dailyAddedEmployees.animation}
              />
              <p> Number of Employee Added according per Day</p>
             
      </div>
    )
  }
}


export default BarChart;