import {
  ADD_SECOND,
  RESTART_TIMER,
  START_TIMER,
  ADD_N_SECONDS,
  CLEAR_TIMER
} from './types'

const TIMER_DURATION = 6

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
}

// Helper functions
const applyStartTimer = (state) => ({ ...state, isPlaying: true })

const applyRestartTimer = (state) => ({
  ...state,
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
})

const applyAddSecond = (state) => {
  if (state.elapsedTime < TIMER_DURATION)
    return { ...state, elapsedTime: state.elapsedTime + 1 }
  else return { ...state, isPlaying: false }
}

const applyAddNSeconds = (state, seconds) => ({
  ...state,
  timerDuration: state.timerDuration + seconds
})

const applyClearTimer = (state) => ({
  ...state,
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: 0
})

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state)

    case RESTART_TIMER:
      return applyRestartTimer(state)

    case ADD_SECOND:
      return applyAddSecond(state)

    case ADD_N_SECONDS:
      return applyAddNSeconds(state, action.seconds)

    case CLEAR_TIMER:
      return applyClearTimer(state)

    default:
      return state
  }
}

export default reducer
