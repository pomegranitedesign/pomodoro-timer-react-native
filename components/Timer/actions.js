import {
  ADD_SECOND,
  RESTART_TIMER,
  START_TIMER,
  ADD_N_SECONDS,
  CLEAR_TIMER
} from './types'

const startTimer = () => ({ type: START_TIMER })
const restartTimer = () => ({ type: RESTART_TIMER })
const addSecond = () => ({ type: ADD_SECOND })
const addNSeconds = (seconds) => ({ type: ADD_N_SECONDS, seconds })
const clearTimer = () => ({ type: CLEAR_TIMER })

const actionCreators = {
  startTimer,
  restartTimer,
  addSecond,
  addNSeconds,
  clearTimer
}

export { actionCreators }
