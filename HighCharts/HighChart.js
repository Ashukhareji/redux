import React, { useState } from 'react';
import LineChart from './LineChart';
import ColumnChart from './ColumnChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import ScatterChart from './ScatterChart';

const HighChart = () => {
  const [selectedChart, setSelectedChart] = useState('');

  const handleChartTypeClick = (chartType) => {
    setSelectedChart(chartType);
  };

  return (
    <div className='Highchart'>
      <nav className='ChartContainer'>
        <a><img src='https://th.bing.com/th?id=OIP.T6RXTXUd27Sni5C_kgr4TgHaHg&w=248&h=251&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'></img></a>
        <a onClick={() => handleChartTypeClick(<LineChart/>)} >Line Chart</a>
        <a onClick={() => handleChartTypeClick(<ColumnChart/> )} >Column Chart</a>
        <a onClick={() => handleChartTypeClick(<BarChart/>)} >Bar Chart</a>
        <a onClick={() => handleChartTypeClick(<PieChart/>)} >Pie Chart</a>
        <a onClick={() => handleChartTypeClick(<ScatterChart/>)}>Scatter Chart</a>
      </nav>
      <div>
        
        <h2>{selectedChart} HighCharts</h2>
         <p>We make it easy for developers to create charts and dashboards for web and mobile platforms.
For Javascript, Angular, React, VueJS, iOS, R, .NET, Python, and more.</p>

         <img src='https://studentprojectguide.com/wp-content/uploads/2018/07/Highcharts-Tutorial-Tutorial-on-Creating-Charts.png' id='Typeimg'></img>
    
      </div>


      <footer>
        <table >
        
            <th>SHORTCUTS</th>
            <th>DEVELOPER</th>
            <th>SUPPORT</th>
            <th>SITE</th>
            <th>ABOUT</th>
            <tr>
                <td>Products</td>
                <td>Documentation</td>
                <td>Highcharts Forum</td>
                <td>Cookie Policy</td>
                <td>Our Story</td>
            </tr>
            <tr>
                <td>Demos</td>
                <td>API Reference</td>
                <td>Stack Overflow</td>
                <td>Cookie Preferences</td>
                <td>Discover the Team</td>
            </tr>
            <tr>
                <td>Download</td>
                <td>Accessibility</td>
                <td>Github</td>
                <td>Privacy Policy</td>
                <td>Contact</td>
            </tr>
            </table>
      </footer>

    </div>
    
  );
};

export default HighChart;
