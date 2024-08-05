import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import './BarChart.css'; // Import the external CSS file

const BarChart = ({ data }) => {
    const [margin, setMargin] = useState({ top: 20, right: 20, bottom: 50, left: 60 });

    return (
        <div className="barchart-wrapper">
            <div className='HeaderSection'>
                <div>
                    <h2 className='Header'>Activity</h2>
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Weekly
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>
            </div>

            <ResponsiveBar
                data={data}
                keys={['value']}
                indexBy="id"
                margin={margin} // Apply dynamic margins here
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
                    tickValues: [0, 5000, 10000, 15000,20000,25000,30000,35000],
                    format: value => `${value / 1000}k`,
                }}
                enableGridX={false}
                enableGridY={true} // Enable grid lines for Y-axis
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
                        grid: {
                            line: {
                                stroke: '#ffffff',
                                strokeWidth: 1,
                            }
                        }
                    },
                }}
            />

        </div>
    );
};

export default BarChart;
