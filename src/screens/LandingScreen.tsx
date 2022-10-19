import React, { useCallback, useState } from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Card from '../components/Card'
import InstructionModal from '../components/InstructionModal'
import Layout from '../components/Layout'

const LandingScreen = () => {
  const [cards, setCards] = useState([1, 2, 3, 4, 5])
  const [counter, setCounter] = useState<{
    yes: number
    no: number
    maybe: number
  }>({ yes: 0, no: 0, maybe: 0 })
  const [open, setOpen] = useState(true)
  const [swipesLeft, setSwipesLeft] = useState(3)

  const closeInstructions = useCallback(() => {
    setOpen(false)
  }, [])

  const openInstructions = useCallback(() => {
    setOpen(true)
  }, [])

  const extiFlow = useCallback(() => {
    setCards([])
  }, [])

  const startFlow = useCallback(() => {
    setCounter({ yes: 0, no: 0, maybe: 0 })
    setCards([1, 2, 3, 4, 5])
    setSwipesLeft(3)
  }, [])

  const actions = useCallback(
    (action: 'LEFT' | 'RIGHT' | 'UP' | 'DOWN') => {
      const actions = {
        LEFT: () => {
          setCounter({ ...counter, no: counter.no + 1 })
          setSwipesLeft(swipesLeft - 1)
        },
        RIGHT: () => {
          setCounter({ ...counter, yes: counter.yes + 1 })
          setSwipesLeft(swipesLeft - 1)
        },
        UP: () => {
          setCounter({ ...counter, maybe: counter.maybe + 1 })
          setSwipesLeft(swipesLeft - 1)
        },
        DOWN: () => {
          extiFlow()
        },
      }
      actions[action]()
    },
    [counter, extiFlow, swipesLeft],
  )

  return (
    <Layout>
      <View style={styles.header}>
        <Pressable onPress={openInstructions} style={styles.closeButton}>
          <AntDesignIcon name="close" size={25} color={'white'} />
        </Pressable>
        <View style={styles.flex}>
          <Text style={styles.headerTitle}>{`${swipesLeft} ${
            swipesLeft > 1 ? 'Swipes' : 'Swipe'
          } left`}</Text>
        </View>
      </View>

      <View style={styles.flex}>
        {swipesLeft > 0 &&
          cards.length > 0 &&
          cards
            .reverse()
            .map((card) => <Card key={card} number={card} actions={actions} />)}
        {(swipesLeft < 1 || !cards.length) && (
          <View style={styles.recapPanel}>
            <Button onPress={startFlow} title={'Start again'} />
            <Text style={styles.generalText}>Yes: {counter.yes}</Text>
            <Text style={styles.generalText}>No: {counter.no}</Text>
            <Text style={styles.generalText}>Maybe: {counter.maybe}</Text>
          </View>
        )}
      </View>
      <InstructionModal visible={open} close={closeInstructions} />
    </Layout>
  )
}

export default LandingScreen

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    textAlign: 'center',
    paddingRight: 40,
  },
  generalText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    textAlign: 'center',
  },
  closeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  recapPanel: {
    flex: 1,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
})
