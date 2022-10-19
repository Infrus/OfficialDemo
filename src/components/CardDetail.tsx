import React, { useCallback, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

const mockText = `Tis' the season for all the reason to travel. With that comes packing
and family... and what better way to survive both than having this
ready to go? Tis' the season for all the reason to travel. With that
comes packing and family... and what better way to survive both than
having this ready to go? Tis' the season for all the reason to travel.
With that comes packing and family... and what better way to survive
both than having this ready to go? `

type CardDetailProps = {
  number: number
}

const CardDetail = ({ number }: CardDetailProps) => {
  const [showMore, setShowMore] = useState(false)
  const onPressShowMore = useCallback(() => {
    setShowMore(!showMore)
  }, [showMore])

  return (
    <Pressable onPress={onPressShowMore} style={styles.flex}>
      <LinearGradient
        start={{ x: -0.2, y: 0.2 }}
        end={{ x: 0.5, y: 0.5 }}
        colors={['#752c44', '#671c49', '#41195b']}
        style={styles.card}
      >
        <ScrollView scrollEnabled={showMore}>
          <View style={styles.row}>
            <Text style={styles.title}>{`#${number}`}</Text>
            <View style={styles.separator} />
            <Text style={styles.title}>Card</Text>
          </View>
          <View>
            <Text numberOfLines={!showMore ? 5 : undefined} style={styles.text}>
              {mockText}
            </Text>
            {!showMore && <Text style={styles.highlitedText}>See more</Text>}
            {[1, 2, 3, 4, 5].map((_, i) => (
              <View key={i} style={styles.itemContainer}>
                <FontAwesome5Icon
                  name="icons"
                  size={10}
                  color={'orange'}
                  style={{
                    alignSelf: 'center',
                  }}
                />
                <Text style={[styles.textItem, styles.text, { marginLeft: 8 }]}>
                  {'Item:'}
                </Text>
                <Text style={[styles.textItem, styles.highlitedText]}>
                  {'Slot'}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </Pressable>
  )
}

export default CardDetail

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(202, 69, 93, 1)',
    borderRadius: 25,
    padding: 16,
    margin: 24,
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  content: {},
  extra: {},
  row: {
    flexDirection: 'row',
  },
  separator: {
    marginTop: 5,
    height: 18,
    marginHorizontal: 10,
    backgroundColor: 'gray',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRightWidth: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: 1,
  },
  textItem: {
    flex: 1,
    paddingVertical: 10,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: 1,
    textAlignVertical: 'center',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: 'white',
    opacity: 0.6,
  },
  highlitedText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    color: 'white',
  },
})
