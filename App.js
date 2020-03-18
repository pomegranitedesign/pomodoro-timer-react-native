import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './components/Timer/reducers'
import Timer from './components/Timer'

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
