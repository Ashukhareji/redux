import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
const options = {
    chart:{
        type: 'pie',
        
    },
    title:{
        text: 'Pie Chart'
    },
    credits:{
        enabled: false
    },
    series: [
        {
    name: 'Fruit Eaten',
    data: [['jane',10],['jack',6],['jhon',3],['remaining',40]],
    }
]
    }
const PieChart = () => {
  return (
    <div>
         <HighchartsReact highcharts={Highcharts} options= {options} />
    </div>
  )
}


export default PieChart