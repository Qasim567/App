import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.cards, styles.redText]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.cards, styles.blueText]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.cards, styles.greenText]}>
            <Text>Green</Text>
        </View>
      </View>
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
        flex:1,
        flexDirection:'row'
    },
    cards:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        margin:10,
        borderRadius:10,
    },
    redText:{
        backgroundColor:'#EF5354'
    },
    blueText:{
        backgroundColor:'#50DBB4'
    },
    greenText:{
        backgroundColor:'#5DA3FA'
    }
})