import { Image, StyleSheet, Text, TouchableOpacity, View , Linking } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite (websiteLink : string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.cardHeading}>Blog Cards</Text>
      <View style={[styles.card , styles.cardElevated]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headingText}>What's Up Here is New Tech Blogs</Text>
        </View>
        <Image source={{uri : "https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"}} style={styles.cardImage}/>
        <View style={styles.bodyContainer}>
            <Text style={styles.bodyText} numberOfLines={3}>
            With more than 570 million blogs online and 77% of people still reading them, you can find plenty of blogs on any given topic. It’s obvious it’s still worth investing in creating high-quality written content as part of your marketing strategy. These 22 top tech blogs give readers all the up-to-date news on technology products.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() =>  openWebsite('https://izea.com/resources/top-tech-blogs/')}>
                <Text style={styles.footerContainer}>Read More</Text>
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
    cardHeading : {},
    card: {},
    cardElevated:{},
    headingContainer:{},
    headingText: {},
    cardImage: {
        height : 100
    },
    bodyContainer: {},
    bodyText: {},
    footerContainer : {},
    socialLinks: {}


})