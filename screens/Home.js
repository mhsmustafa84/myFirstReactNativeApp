import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

export default function Home() {

    const [posts, setPosts] = useState([]);
    const { navigate } = useNavigation();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(res => setPosts([...res]))
            .catch(err => console.log(err));
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={({ item }) =>
                    <View style={styles.listItemContainer}>
                        <Image style={styles.listItemImg} source={{ uri: "https://source.unsplash.com/random" }} />
                        <Text onPress={() => navigate("Details", { id: item.id })} style={styles.listItemTitle}>{item.title}</Text>
                    </View>
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    listItemContainer: {
        marginVertical: 25,
        alignItems: 'center',
    },
    listItemTitle: {
        textAlign: "center",
        color: "red"
    },
    listItemImg: {
        width: "90%",
        height: 250,
    },
});