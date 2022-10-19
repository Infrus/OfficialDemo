import React, { useCallback, useState } from 'react'
import { Dimensions, Pressable, StyleSheet } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  ZoomIn,
  ZoomOut,
} from 'react-native-reanimated'
import { snapPoint } from 'react-native-redash'
import CardDetail from './CardDetail'
import CardPreview from './CardPreview'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
const HORIZONTAL_SNAP_POINTS = [-WIDTH, 0, WIDTH]
const VERTICAL_SNAP_POINTS = [-HEIGHT, 0, HEIGHT]

type CardProps = {
  number: number
  actions: (action: 'LEFT' | 'RIGHT' | 'UP' | 'DOWN') => void
}

const Card = ({ number, actions }: CardProps) => {
  const [showDetail, setShowDetail] = useState(false)
  const x = useSharedValue(0)
  const y = useSharedValue(0)
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { translateY: y.value }],
    }
  })

  const drag = Gesture.Pan()
    .onUpdate((e) => {
      x.value = e.translationX
      y.value = e.translationY
    })
    .onEnd((e) => {
      x.value = snapPoint(x.value, e.velocityX, HORIZONTAL_SNAP_POINTS)
      y.value = snapPoint(y.value, e.velocityY, VERTICAL_SNAP_POINTS)
      if (x.value === HORIZONTAL_SNAP_POINTS[0]) {
        runOnJS(actions)('LEFT')
      }
      if (x.value === HORIZONTAL_SNAP_POINTS[2]) {
        runOnJS(actions)('RIGHT')
      }
      if (y.value === VERTICAL_SNAP_POINTS[0]) {
        runOnJS(actions)('UP')
      }
      if (y.value === VERTICAL_SNAP_POINTS[2]) {
        runOnJS(actions)('DOWN')
      }
    })

  const onPressShowDetail = useCallback(() => {
    setShowDetail(true)
  }, [])

  return (
    <GestureDetector gesture={drag}>
      <Animated.View
        entering={ZoomIn}
        exiting={ZoomOut}
        style={[animatedStyles, StyleSheet.absoluteFill]}
      >
        {!showDetail && (
          <Pressable style={styles.flex} onPress={onPressShowDetail}>
            <CardPreview number={number} />
          </Pressable>
        )}
        {showDetail && <CardDetail number={number} />}
      </Animated.View>
    </GestureDetector>
  )
}

export default Card

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
})
