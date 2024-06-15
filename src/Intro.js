import React from 'react'
import One from './Images/One.png'
import Two from './Images/Two.png'
import './Intro.css'
import App from './App'

const Intro = () => {
  return (
    <div id="flex-container">
        <div className="leftbox">
            <img className='left' src={One} alt='One'/>
        </div>
        <div className="middlebox">
            <App />
        </div>
        <div className="rightbox">
            <img className='right' src={Two} alt='Two'/>
        </div>
    </div>
  )
}

export default Intro