import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.elevatedcard]}>
      <Image
        style={styles.Imagecard}
        source={{
            uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
        }}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Hawa Mahal</Text>
        <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
        <Text style={styles.cardDescription}>The Hawa mahal is the palace in the city of Jaipur, India.
        Built from red and pink sandstone, it is on the edge of the City Palace
        </Text>
        <Text style={styles.cardFooter}>12 mins away</Text>
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
    card:{
        height:350,
        marginVertical:12,
        marginHorizontal:16,
        borderRadius:7,
    },
    elevatedcard:{
      backgroundColor:'#FFFFFF',
      elevation:5,
    },
    Imagecard:{
        height:180,
        borderTopLeftRadius:7,
        borderTopRightRadius:7
    },
    cardBody:{
      flex:1,
      paddingVertical:5,
      paddingHorizontal:12
    },
    cardTitle:{
      fontSize:24,
      fontWeight:'bold',
      color:'#000000',
      marginBottom:4
    },
    cardLabel:{
      fontSize:16,
      color:'#000000',
      marginBottom:6
    },
    cardDescription:{
      color:'#000000',
      marginBottom:6
    },
    cardFooter:{
      color:'#000000'
    }
})