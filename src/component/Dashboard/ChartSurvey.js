import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from 'react-google-charts';



function ChartSurvey({arrMonth}) {
     const arrGet = []
     console.log('arrMonth123',arrMonth)
     arrMonth.map((ele,i)=>{
          console.log('ele', ele   )
     })
     // console.log('arrGet',arrGet[1], typeof(arrGet[1]))
     
      const data = [
          ["Year", "Sales", "Expenses", "Profit", "1", "2"],
          ["2014",5,6,7,8,9]
          // arrMonth.map((ele,i)=>{
          //     [ele]
          // })
        ];
        
          const options = {
          chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2014-2017",
          },
        };
        
         
  return (
     <Chart
     chartType="Bar"
     width="100%"
     height="400px"
     data={data}
     options={options}
   />
  )
}

export default ChartSurvey