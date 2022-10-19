import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import LandingScreen from './screens/LandingScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <LinearGradient
        colors={['#1d0e42', '#28133f', '#2b094b', '#1e0e56']}
        style={styles.flex}
      >
        <StatusBar backgroundColor={'#1d0e42'} />
        <GestureHandlerRootView style={styles.flex}>
          <LandingScreen />
        </GestureHandlerRootView>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  flex: { flex: 1 },
})
