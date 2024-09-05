import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
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
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contacts.map((item) => (
                    <View key={item.uid} style={styles.userCard}>
                        <Image style={styles.image}
                            source={{
                                uri: item.imageUrl,
                            }} />
                        <View style={styles.innerCard}>
                            <Text style={styles.userName}>{item.name}</Text>
                            <Text style={styles.userStatus}>{item.status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: '#FFFFFF',
        marginBottom:8
    },
    container: {},
    userCard: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 8,
        backgroundColor: '#8D3DAF',
        paddingVertical: 8,
        marginHorizontal: 7,
        borderRadius: 8
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginLeft: 10
    },
    innerCard:{
        margin:7
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    userStatus: {
        color: '#FFFFFF'
    }
})