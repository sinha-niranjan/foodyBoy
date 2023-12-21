import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Category from "./Category"

export default function Categories() {
  return (
    <View style={{flex:1}}>
       <Category />
       <Category />
       <Category />
       <Category />
    </View>
  )
}

const styles = StyleSheet.create({})