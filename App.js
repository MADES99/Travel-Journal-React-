import React from 'react'
import Header from './Components/Header'
import TravelCard from './Components/TravelCard'
import data from './data'

export default function App() {
  const card = data.map(travel => {
    return <TravelCard
                key={travel.id} 
                travel={travel}
            />  
  })
    return (
        <div className='container'>
            <Header />
            <div className='card-box'>
                { card }
            </div>
        </div>
    )
}