import HighchartsReact from 'highcharts-react-official'
import React from 'react'
import Highcharts from 'highcharts'



const options = {
    chart:{
        type: 'column',
        zoomType: 'xy'
    },
    title:
    {
        text: 'Column Chart'
    },
    xAxis:{
        title:{
            text: 'Name'
        },
        min: 0,
        max: 1,
    scrollBy: {
      enabled: true}
    },
    series: [
        {
            name: 'Ram',
            data: [10,20,30,100,200,30,100,20,300]
    }
]
    }
const ColumnChart = () => {
  return (
    <div>
         <HighchartsReact highcharts={Highcharts} options= {options} />
    </div>
  )
}

export default ColumnChart