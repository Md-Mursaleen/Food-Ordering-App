import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HeaderButtonTabs(props) {
    return (
        <TouchableOpacity style={
            {
                width: "50%",
                padding: 5,
                backgroundColor: props.activeTab === props.text ? "white" : "#F1F1F1",
                borderRadius: 30
            }
        }
            onPress={() => (
                props.setActiveTab(props.text)
            )}>
            <Text style={
                [styles.textStyle, props.checkout && { marginTop: 3, fontWeight: "500" }]
            }>{props.text}</Text>
            {!props.checkout && (
                <Text style={
                    {
                        textAlign: "center"
                    }
                }>{props.description}</Text>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        fontWeight: "600",
        color: "black",
        textAlign: "center"
    }
});