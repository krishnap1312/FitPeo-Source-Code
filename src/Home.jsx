// src/components/Home.js

import React from 'react';
import BarChart from './Test';
import ProgressCircle from './Spinner';


const data = [
    { id: '1', label: '5', value: 3000 },
    { id: '2', label: ' ', value: 5000 },
    { id: '3', label: ' ', value: 1000 },  // Adjusted value
    { id: '4', label: '9', value: 6000 },
    { id: '5', label: ' ', value: 6000 },
    { id: '6', label: ' ', value: 6000 },
    { id: '7', label: '11', value: 6000 },
    { id: '8', label: ' ', value: 6000 },
    { id: '9', label: ' ', value: 6000 },
    { id: '10', label: '13', value: 6000 },
    { id: '11', label: ' ', value: 6000 },
    { id: '12', label: ' ', value: 6000 },
    { id: '13', label: '15', value: 6000 },
    { id: '14', label: ' ', value: 6000 },
    { id: '15', label: ' ', value: 6000 },
    { id: '16', label: '17', value: 6000 },
    { id: '17', label: ' ', value: 9000 },
    { id: '18', label: ' ', value: 9000 },
    { id: '19', label: '19', value: 9000 },
    { id: '20', label: ' ', value: 9000 },
    { id: '21', label: '21', value: 9000 },
    { id: '22', label: ' ', value: 9000 },
    { id: '23', label: ' ', value: 9000 },
    { id: '24', label: '23', value: 9000 },
    { id: '25', label: ' ', value: 9000 },
    { id: '26', label: ' ', value: 9000 },
    { id: '27', label: '25', value: 9000 },
    { id: '28', label: ' ', value: 19000 },
    { id: '29', label: ' ', value: 9000 },
    { id: '30', label: '27', value: 9000 },
];

const Home = () => (
    <div style={{ width: 800, }}>
        <h1>My Simple Nivo Bar Chart</h1>
        <BarChart data={data} />
        <ProgressCircle percentage={70} />
    </div>
);

export default Home;
