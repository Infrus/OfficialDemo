import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

type LayoutProps = {
  children?: ReactNode | undefined
}

const Layout = ({ children }: LayoutProps) => {
  return <View style={styles.layout}>{children}</View>
}

export default Layout

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    margin: 16,
  },
})
