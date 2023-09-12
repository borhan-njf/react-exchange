import React from 'react'
//gif
import Rocket from '../assets/gifs/Rocket.gif'

export default function Loader() {
  return (
    <div style={{marginTop:'110px'}}>
        <img src={Rocket} alt="loading..." />
        <h3>Loading...</h3>
    </div>
  )
}
