import { BlurView } from '@react-native-community/blur'
import React from 'react'
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Hand from '../icons/Hand'
import Layout from './Layout'
import SwipeArrows from './SwipeArrows'

type InstructionModalProps = {
  visible: boolean
  close: () => void
}

const InstructionModal = ({ close, visible }: InstructionModalProps) => {
  return (
    <Modal
      style={styles.flex}
      transparent={false}
      visible={visible}
      onRequestClose={close}
    >
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="materialLight"
        blurAmount={12}
        reducedTransparencyFallbackColor="white"
      />
      <Layout>
        <Pressable onPress={close} style={styles.closeButton}>
          <AntDesignIcon name="close" size={25} color={'black'} />
        </Pressable>
        <View style={styles.modalWrapper}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Swipe instruction</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.innerCard}>
              <Text style={styles.textAction}>Maybe</Text>
              <Text style={styles.textTip}>swipe up</Text>
              <SwipeArrows />
              <View style={styles.actionContainer}>
                <View style={styles.alignCenter}>
                  <View style={styles.actionContainer}>
                    <Text style={styles.textAction}>No</Text>
                    <SwipeArrows orientation="left" />
                  </View>
                  <Text style={styles.textTip}>swipe left</Text>
                </View>
                <View style={styles.circle}>
                  <Hand />
                </View>
                <View style={styles.alignCenter}>
                  <View style={styles.actionContainer}>
                    <SwipeArrows orientation="right" />
                    <Text style={styles.textAction}>Yes</Text>
                  </View>
                  <Text style={styles.textTip}>swipe right</Text>
                </View>
              </View>
              <SwipeArrows orientation="down" />
              <Text style={styles.textAction}>Exit</Text>
              <Text style={styles.textTip}>swipe down</Text>
            </View>
          </View>
        </View>
      </Layout>
    </Modal>
  )
}

export default InstructionModal

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  modalWrapper: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(185, 91, 151, 0.24)',
    borderRadius: 17,
    backgroundColor: 'rgba(42, 2, 52, 0.9)',
  },
  innerCard: {
    height: 331,
    width: 227,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(202, 69, 93, 0.2)',
    borderRadius: 16,
  },
  closeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 38,
    marginBottom: 8,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  header: {
    height: 95,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 199, 39, 0.09)',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  textHeader: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  content: {
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAction: {
    color: 'white',
    fontSize: 16,
  },
  textTip: {
    color: 'white',
    fontSize: 11,
    opacity: 0.4,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#6D3265',
  },
  alignCenter: {
    alignItems: 'center',
  },
})
