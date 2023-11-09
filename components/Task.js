import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function Task(props) {
    return (
        <>
            <View style={styles.item}>
                <Text style={styles.task}>
                    {props.text}
                </Text>
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
        marginTop: 15,
        marginBottom: 15,
        width: '75%',
    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        fontSize: 16,
    }
})
