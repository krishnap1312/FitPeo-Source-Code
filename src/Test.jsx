// src/components/BarChart.js

import React from 'react';
import { ResponsiveBar } from '@nivo/bar';


const BarChart = ({ data }) => (
    <div style={{ height: 400, backgroundColor: '#1f2029' }}>
        <ResponsiveBar
            data={data}
            keys={['value']}
            indexBy="id"
            margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
            borderRadius={8}
            padding={0.5}
            colors="#3498db"
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32,
                format: value => data.find(item => item.id === value)?.label || '',
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -50,
                tickValues: [0, 5000, 10000, 15000], 
                format: value => `${value / 1000}k`, 
            }}
            enableGridX={false}
            enableGridY={true}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            enableLabel={false}
            role="application"
            ariaLabel="Nivo bar chart demo"
            theme={{
                axis: {
                    ticks: {
                        text: {
                            fill: '#ffffff', 
                        },
                    },
                },
            }}
        />
    </div>
);

export default BarChart;
