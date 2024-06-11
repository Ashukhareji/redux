import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

const options = {
    chart: {
        type: 'bar',
        marginLeft: 150,
    },
    title: {
        text: 'Bar Chart'
    },
    
    xAxis:{
    type: 'category',
        title: {
            text: null
        },
        min: 0,
        max: 4,
        
        tickLength: 0
    },

    yAxis: {
        min: 0,
        max: 1200,
        scrollbar: {
            enabled: true
        },
       
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Students %',
        data: [20, 40, 50, 60, 77, 80, 90]
    }]
}

const BarChart = () => {
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default BarChart
