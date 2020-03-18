import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators as actions } from './actions'
import Button from '../Button'

class Timer extends Component {
  formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    time -= minutes * 60
    const seconds = parseInt(time % 60, 10)
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const currentProps = this.props
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => currentProps.addSecond(), 1000)
      this.setState({ timerInterval })
    } else if (currentProps.isPlaying && !nextProps.isPlaying)
      clearInterval(this.state.timerInterval)
  }

  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
      addNSeconds,
      clearTimer
    } = this.props
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.upper}>
          <Text style={styles.time}>
            {this.formatTime(timerDuration - elapsedTime)}
          </Text>
        </View>

        <View style={styles.middle}>
          <TouchableOpacity style={styles.uiButton}>
            <Button iconName="plus-circle" onPress={() => addNSeconds(5)} />
            <Text style={styles.textStyle}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.uiButton}>
            <Button iconName="plus-circle" onPress={() => addNSeconds(10)} />
            <Text style={styles.textStyle}>10</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.uiButton}>
            <Button iconName="plus-circle" onPress={() => addNSeconds(20)} />
            <Text style={styles.textStyle}>20</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lower}>
          <Button iconName="refresh" onPress={clearTimer} />
          {!isPlaying ? (
            <Button iconName="play-circle" onPress={startTimer} />
          ) : (
            <Button iconName="stop-circle" onPress={restartTimer} />
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 30
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lower: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  time: {
    color: '#ffffff',
    fontSize: 120,
    fontWeight: '100'
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 30
  },
  uiButton: {
    alignItems: 'center'
  }
})

// Redux
const mapStateToProps = (state) => {
  const { isPlaying, elapsedTime, timerDuration } = state
  return { isPlaying, elapsedTime, timerDuration }
}

const mapDispatchToProps = (dispatch) => ({
  startTimer: bindActionCreators(actions.startTimer, dispatch),
  restartTimer: bindActionCreators(actions.restartTimer, dispatch),
  addSecond: bindActionCreators(actions.addSecond, dispatch),
  addNSeconds: bindActionCreators(actions.addNSeconds, dispatch),
  clearTimer: bindActionCreators(actions.clearTimer, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
