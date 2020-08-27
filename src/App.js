import React from 'react'
import handleMovement from './features/movement'
import Player from './features/player'
import { MAP_HEIGHT, MAP_WIDTH } from './config/constants'
import testSprite from './img/test_map.png'

import './app.css'

function App() {
  return (
    <div
      className="map"
      style={{
        height: MAP_HEIGHT,
        width: MAP_WIDTH,
        backgroundImage: `url(${testSprite})`
      }}
    >
      <Player />
    </div>
  )
}

export default handleMovement(App)