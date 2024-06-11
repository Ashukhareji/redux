import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
const options = {
    chart:{
        type: 'scatter',
        zoomType: 'xy'
    },
    title:{
        text: 'Scatter Chart',
    },
    series: [
        {
    name: 'Data',
    data: [{
          name: 'jack',
          x: 38,
          color: 'red',
          y: 70,
          
      },
      {
          name: 'john',
          x: 18,
          y: 60
      },
      {
          name: 'james',
          x: 28,
          y: 40
      }]
    }
]
    }
const ScatterChart = () => {
  return (
    <div>
         <HighchartsReact highcharts={Highcharts} options= {options} />
    </div>
  )
}


export default ScatterChart