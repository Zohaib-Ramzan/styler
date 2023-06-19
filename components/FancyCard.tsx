import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.cardHeading}>Trending Places</Text>
      <View style = {[styles.card , styles.cardElevated]}>
        <Image source={{uri:"https://www.travelanddestinations.com/wp-content/uploads/2019/10/Beautiful-places-in-Pakistan.jpg"}} style={styles.cardImage}></Image>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Attabad Lake</Text>
            <Text style={styles.cardLabel}>Skardu,Pakistan</Text>
            <Text style={styles.cardDescription}>
            Pakistan is a beautiful country. Home to 108 peaks above 7,000 meters, including K2, the south Asian country’s mountain scenery is stunning.
            </Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardHeading  : {
        fontSize : 24,
        fontWeight : "500",
        paddingHorizontal: 8,
    },
    card : {
        width : 350,
        height : 340,
        borderRadius : 6,
        marginVertical : 12,
        marginHorizontal: 15

    },
    cardElevated : {
        backgroundColor : "#FFFFFF",
        elevation : 3,
        shadowOffset: {
            height : 1,
            width : 1
        }
    },
    container : {},
    cardImage:{
        height : 180,
        marginBottom : 8,
        borderTopLeftRadius:6 ,
        borderTopRightRadius: 6
    },
    cardBody : {
        flex : 1,
        flexGrow : 1,
        paddingHorizontal: 12
    },
    cardTitle : {
        color : "black",
        fontSize : 20,
        fontWeight : "bold",
        marginBottom: 8
    },
    cardLabel:{
        color : "black",
        fontSize : 14,
        marginBottom : 6
    },
    cardDescription:{
        color : "#242B2E",
        fontSize : 16,
        marginBottom : 4

    },
    cardFooter:{
        color : "black",
        fontSize : 14,
        marginTop: 16,
        textAlign: "right"
    }

})