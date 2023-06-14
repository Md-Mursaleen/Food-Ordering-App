import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const OrderItems = ({ item }) => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ".." : string;
    }
    return (
        <View style={
            {
                marginTop: 30,
                marginLeft: 15
            }
        }>
            <View style={
                {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }
            }>
                <View>
                    <Text style={
                        {
                            fontSize: 18,
                            fontWeight: "500"
                        }
                    }>{truncate(item.title || item.text, 30)}</Text>
                    <Text style={
                        {
                            maxWidth: 220,
                            fontSize: 15,
                            color: "#8f8f8f",
                        }
                    }>{item.description}</Text>
                    <Text style={
                        [styles.priceContainer, !item.description && { marginTop: 0 }]
                    }>{item.price}</Text>
                </View>
                <Image source={{ uri: item.image || item.uri }} style={
                    [styles.imageStyle, item.uri && { resizeMode: "contain" }]
                } />
            </View>
        </View>
    );
}

export default OrderItems;

const styles = StyleSheet.create({
    priceContainer: {
        marginTop: 5,
        fontSize: 15,
        color: "#8f8f8f"
    },
    imageStyle: {
        marginRight: 15,
        height: 90,
        width: 90
    }
});