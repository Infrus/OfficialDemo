import React from 'react'
import { StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

type CardPreviewProps = {
  number: number
}

const CardPreview = ({ number }: CardPreviewProps) => {
  return (
    <LinearGradient
      start={{ x: -0.2, y: 0.2 }}
      end={{ x: 0.5, y: 0.5 }}
      colors={['#752c44', '#671c49', '#41195b']}
      style={styles.card}
    >
      <Text style={styles.title}>{`#${number}`}</Text>
      <Text style={styles.subtitle}>Card</Text>
    </LinearGradient>
  )
}

export default CardPreview

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'rgba(202, 69, 93, 1)',
    borderRadius: 25,
    padding: 16,
    margin: 24,
  },
  title: {
    marginTop: 50,
    fontSize: 44,
    lineHeight: 66,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
  },
})
