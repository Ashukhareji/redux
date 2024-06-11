import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'


const options = {
    chart:{
        type: 'line',
        zoomType: 'xy'
    },
    title:{
        text: 'Line Chart'
    },
    series: [
        {
    name: 'Profit',
    data: [100,30,50,100,80,40]
    }
]
    }
const LineChart = () => {

  return (
    <div>
        <HighchartsReact highcharts={Highcharts} options= {options} />
    </div>
  )
}

export default LineChart