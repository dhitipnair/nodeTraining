import { BarChart } from './charts/BarChart';
import LineChart from './charts/LineChart'
import PieChart from './charts/PieChart'

import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { Data } from './utils/Data';
import "chart.js/auto";
import Sidebar from './sidebar';


function Success() {   
    let location=useLocation(); 
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });
     
  return (
    <div style={{textAlign: "center"}}>
<Sidebar />
        <h1>Success Login</h1>
        {/* <h3>Welcome {location?.state.username}</h3> */}
        
        <BarChart chartData={chartData} />

        <br/>
        <br />
        <br />
        <LineChart />
        <br/>
        <br />
        <br />
        <PieChart />
        <br/>
        <br />
        <br />
        <Link to="/">Back to Login</Link>
    </div>
  )
}

export default Success