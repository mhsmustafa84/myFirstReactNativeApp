import { useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

export default function Details() {
    const { params } = useRoute();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(res => res.json())
            .then(res => setPost({ ...res }))
            .catch(err => console.log(err));
        console.log(post);
    }, [])

    return (
        <View style={styles.container}>
            <Text><Text style={{ color: "red" }}>Post ID: </Text> {post.id}</Text>
            <Text style={styles.listItemTitle}><Text style={{ color: "red" }}>Post title: </Text>{post.title}</Text>
            <Image style={styles.listItemImg} source={{ uri: "https://source.unsplash.com/random" }} />
            <Text style={styles.listItemBody}><Text style={{ color: "red" }}>Post body: </Text>{post.body}</Text>
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
    listItemBody: {
        marginVertical: 25,
        alignItems: 'center',
    },
    listItemTitle: {
        textAlign: "center",
        color: "black",
        margin: 20
    },
    listItemImg: {
        width: "90%",
        height: 250,
    },
});