import React from 'react'
import { connect } from 'react-redux'
import testWalkSprite from './test_sprite.png'

function mapDispatchToProps(dispatch) {
  return {
    move: (direction) => {
      dispatch({ type: 'MOVE_PLAYER', payload: direction })
    }
  }
}

function mapStateToProps(state) {
  return {
    position: state.player.position
  }
}

function Player(props) {
  return (
    <div
      style={{
        position: 'relative',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url(${testWalkSprite})`,
        width: '32px',
        height: '42px',
      }}
    >
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
