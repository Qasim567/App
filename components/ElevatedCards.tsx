import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElvatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.cards, styles.elevatedCards]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.cards, styles.elevatedCards]}>
            <Text>me</Text>
        </View>
        <View style={[styles.cards, styles.elevatedCards]}>
            <Text>to</Text>
        </View>
        <View style={[styles.cards, styles.elevatedCards]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.cards, styles.elevatedCards]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.cards, styles.elevatedCards]}>
            <Text>😊</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:20,
        fontWeight:"bold",
        paddingHorizontal:8,
        paddingVertical:8,
        color:'#FFFFFF'
    },
    container:{
        padding:8
    },
    cards:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        margin:1.5,
        borderRadius:10,
    },
    elevatedCards:{
        backgroundColor:'#CAD5E2'
    }
})