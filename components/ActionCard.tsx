import { Image, StyleSheet, Text, TouchableOpacity, View , Linking } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite (websiteLink : string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.cardHeading}>Blog Card</Text>
      <View style={[styles.card , styles.cardElevated]}>
        <View>
            <Text style={styles.headingText}>What's Up Here is New Tech Blogs</Text>
        </View>
        <Image source={{uri : "https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"}} style={styles.cardImage}/>
        <View>
            <Text style={styles.bodyText} numberOfLines={4}>
            With more than 570 million blogs online and 77% of people still reading them, you can find plenty of blogs on any given topic. It’s obvious it’s still worth investing in creating high-quality written content as part of your marketing strategy. These 22 top tech blogs give readers all the up-to-date news on technology products.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() =>  openWebsite('https://izea.com/resources/top-tech-blogs/')}>
                <Text style={styles.cardLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>  openWebsite('https://github.com/Zohaib-Ramzan')}>
                <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardHeading : {
        fontSize : 24,
        marginBottom: 8,
        fontWeight : "bold"
    },
    card: {
        backgroundColor : "#FF6666",
        width : 360,
        height : 330,
        borderRadius : 8,
        justifyContent : "center",

    },
    cardElevated:{
        elevation : 3,
        shadowOffset: {
            height : 1,
            width : 1
        }
    },
    headingText: {
        fontSize : 16,
        textAlign : "center",
        marginBottom : 8,
        marginTop : 6,
        fontWeight : "500"
    },
    cardImage: {
        height : 180
    },
    bodyText: {
        marginBottom : 14,
        marginTop : 8,
    },
    footerContainer : {
        flexDirection : "row",
        justifyContent:"space-around",
        
    },
    socialLinks: {
        backgroundColor : "#758283",
        height : 30,
        width: 100,
        textAlign:"center",
        borderRadius: 4,
        padding : 6
    },
    cardLinks : {
        backgroundColor : "#758283",
        height : 30,
        width: 100,
        textAlign:"center",
        borderRadius: 4,
        padding : 6,
        elevation : 3
    }


})