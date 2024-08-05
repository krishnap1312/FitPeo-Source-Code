import React from 'react'
import './Goals.css'


function Goals() {
  return (
    <div className='GoalsMainDiv'>
    <div>
        <span className='fas fa-bullseye'></span>
        <dt className='GoalsTitle Goals'>Goals</dt>
        <span className='fas fa-arrow-circle-right'></span>
    </div>
    <div>
        <span className='fas fa-coffee'></span>
        <dt className='GoalsTitle Popular'>Popular Dishes</dt>
        <span className='fas fa-arrow-circle-right'></span>
    </div>
    <div>
        <span className='fas fa-reorder'></span>
        <dt className='GoalsTitle Menus'>Menus</dt>
        <span className='fas fa-arrow-circle-right'></span>
    </div>
</div>

  )
}

export default Goals