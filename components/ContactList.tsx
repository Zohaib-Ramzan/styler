import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000',
        },
      ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView  scrollEnabled={false} style={styles.container}>
      {contacts.map(({uid,name,status,imageUrl}) => (
        <View key={uid} style={styles.userCard}>
            <Image 
            source={{uri : imageUrl}} style={styles.userImage}
            />
            <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
            </View>
        </View>
      ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize : 24,
        fontWeight : "bold",
        paddingHorizontal: 8,
        marginBottom : 8

    },
    container: {
        paddingHorizontal : 16,
        marginBottom : 4
    },
    userCard: {
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
        backgroundColor: "#8D3DAF",
        padding: 6,
        borderRadius : 6,
        marginVertical : 4

    },
    userImage: {
        height : 60,
        width : 60,
        borderRadius: 60 / 2,
        marginRight: 10
    },
    userName:{
        fontSize : 16,
        color : "#FFF"
    },
    userStatus:{
        fontWeight : "500"
    }
})