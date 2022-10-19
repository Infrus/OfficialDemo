import React from 'react'
import { View } from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

type SwipeArrowsProps = {
  orientation?: 'up' | 'down' | 'left' | 'right'
}

const SwipeArrows = ({ orientation }: SwipeArrowsProps) => {
  return (
    <View
      style={{
        marginVertical: 5,
        ...(orientation === 'right' && {
          marginHorizontal: 15,
          transform: [{ rotate: '90deg' }],
        }),
        ...(orientation === 'left' && {
          marginHorizontal: 15,
          transform: [{ rotate: '270deg' }],
        }),
        ...(orientation === 'down' && { transform: [{ rotate: '180deg' }] }),
      }}
    >
      <AntDesignIcon name="caretup" size={8} color={'white'} />
      <AntDesignIcon
        name="caretup"
        size={8}
        color={'white'}
        style={{ opacity: 0.4 }}
      />
      <AntDesignIcon
        name="caretup"
        size={8}
        color={'white'}
        style={{ opacity: 0.1 }}
      />
    </View>
  )
}

export default SwipeArrows
