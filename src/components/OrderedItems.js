import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function BasketItems({ items }) {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ".." : string;
    }
    return (
        <>
            <View>
                {items.map((item, index) => (
                    <View key={index}>
                        <View style={
                            [styles.orderedItems, items.indexOf(item) === items.length - 1 && { marginBottom: 14 }]
                        } >
                            <Image source={{
                                uri: item.resturantImage
                            }} style={
                                {
                                    width: 65,
                                    height: 65,
                                    borderRadius: 50
                                }
                            } />
                            <View style={
                                {
                                    flexDirection: "row",
                                    alignItems: "center"
                                }
                            }>
                                <View style={
                                    {
                                        marginLeft: 12
                                    }
                                }>
                                    <View style={
                                        {
                                            flexDirection: "row",
                                            alignItems: "center"
                                        }
                                    }>
                                        <Text style={
                                            {
                                                fontSize: 17,
                                                fontWeight: "500"
                                            }
                                        }>{truncate(item.resturantName, 18)}</Text>
                                        <Text style={
                                            {
                                                marginLeft: 3,
                                                fontSize: 17,
                                                fontWeight: "500"
                                            }
                                        }>({truncate(item.resturantAddress, 12)})</Text>
                                    </View>
                                    <View style={{ marginTop: 8 }}>
                                        <Text style={
                                            {
                                                fontSize: 14,
                                                color: "grey"
                                            }
                                        }>{item.quantity} items • {"\u00A3"}{(item.total).toFixed(2)}</Text>
                                        <Text style={
                                            {
                                                fontSize: 14,
                                                color: "grey"
                                            }
                                        }>Delivered to San Antonio</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {items.indexOf(item) !== items.length - 1 && (
                            <View style={
                                {
                                    marginLeft: 90,
                                    marginTop: 14,
                                    borderBottomColor: "#e2e2e2",
                                    borderBottomWidth: 1
                                }
                            } />
                        )}
                    </View>
                ))}
            </View>
        </>
    );
}

export default BasketItems;

const styles = StyleSheet.create({
    orderedItems: {
        marginTop: 25,
        marginLeft: 15,
        flexDirection: "row",
        alignItems: "center"
    }
});