import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';

const HighChartComponent = () => {
    const [chartType, setChartType] = useState('column');

    const options = {
        chart: {
            type: chartType,
            zoomType: 'xy'
        },
        title: {
            text: chartType,
            
        },
        xAxis:{
            min:0,
            max:3,
            scrollbar:{
                enabled: true
            }
        },
        series: [{
            name: 'Profit',
            data: [100, 30, 50, 100, 80, 40]
        }]
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const newChartType = e.target.chartType.value; 
        setChartType(newChartType);
    };

    return (
        <div id='container'>
            <form onSubmit={handleSubmit}>
                <input name='chartType' type='text' placeholder='Enter the chart type' />
                <button type="submit">Submit</button>
            </form>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default HighChartComponent;
