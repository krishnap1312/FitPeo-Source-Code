import React from 'react'
import Navbar from '../Navbar/Navbar'
import SideMenu from '../SideMenu/SideMenu'
import Graph from '../Graph/Graph'
import BarChart from '../BarChart/BarChart'
import Goals from '../Goals/Goals'
import './Home.css'
import Table from '../Table/Table'
import Reviews from '../Reviews/Reviews'

function Home() {

  const data = [
    { id: '1', value: 5000, label: '5' },
    { id: '2', value: 10000, label: ' ' },
    { id: '3', value: 5000, label: '9' },
    { id: '4', value: 4500, label: ' ' },
    { id: '5', value: 6000, label: '11' },
    { id: '6', value: 6000, label: ' ' },
    { id: '7', value: 5400, label: ' ' },
    { id: '8', value: 8000, label: '13' },
    { id: '9', value: 5000, label: ' ' },
    { id: '10', value: 3000, label: ' ' },
    { id: '11', value: 8000, label: '15' },
    { id: '12', value: 9000, label: ' ' },
    { id: '13', value: 7000, label: ' ' },
    { id: '14', value: 12000, label: '17' },
    { id: '15', value: 8000, label: ' ' },
    { id: '16', value: 7000, label: ' ' },
    { id: '17', value: 15000, label: '19' },
    { id: '18', value: 11000, label: ' ' },
    { id: '19', value: 5000, label: ' ' },
    { id: '20', value: 4000, label: '21' },
    { id: '21', value: 9000, label: '' },
    { id: '22', value: 11000, label: '' },
    { id: '23', value: 7000, label: '23' },
    { id: '24', value: 2000, label: ' ' }
  ];


  return (
    <div className='HomeDiv'>
      <Navbar></Navbar> 
      <SideMenu></SideMenu>
      <Graph percentage={90}></Graph>
      <div>
        <BarChart data={data}></BarChart>
      </div>
      <div>
        <Goals></Goals>
      </div>
      <div>
        <Table></Table> 
      </div>
      <div>
        <Reviews></Reviews>
      </div>
    </div>
  )
}

export default Home