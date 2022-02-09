import React from 'react';
import { Line as Linejs } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

// https://www.chartjs.org/docs/latest/charts/line.html
function Chart() {
    // return last 6 dates in a list
    const dates = [...Array(6)].map((_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - i)
        return d.toISOString().split('T')[0]
    })

    return (
        <div>
            <Line
                data = {{
                    labels: [],
                    datasets: [{
                        label: 'Last 6 days avg temperature: sensor_1',
                        //data: [5, 8, 10, 6, 0, -4, 3],
                        data: [],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                      }]
                }}
                height = {400}
                width = {600}
                options = {{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
}

export default Chart;