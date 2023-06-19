import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal = {true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}> 
        <Text>
            Scrollable
        </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}> 
        <Text>
            Cards
        </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}> 
        <Text>
            to
        </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}> 
        <Text>
            be
        </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}> 
        <Text>
            Show
        </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 25,
        fontWeight : "bold",
        textAlign : "center"
    },
    container : {
        margin : 8
    },
    card : {
        flex : 1,
        width : 100,
        height : 100,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 5,
        margin : 8
    },
    cardElevated:{
        backgroundColor : "#808080",
        elevation : 4,
        shadowOffset : {
            height : 1,
            width : 1
        },
        shadowColor : '#39FF11',
        shadowOpacity : 0.4,
        shadowRadius : 2
    },
})