import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Task(props) {
    return (
        <>
            <View style={styles.item}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.task}>
                    {props.text}
                </Text>
                <TouchableOpacity style={styles.editBtn}>
                    <Text>✏️</Text>
                </TouchableOpacity>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15,
    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        fontSize: 16,
    },

    square: {
        width: 24,
        height: 25,
        borderRadius: 4,
        marginRight: 15,
        backgroundColor: '#55BCF9',
        opacity: 0.8,
    },
})
