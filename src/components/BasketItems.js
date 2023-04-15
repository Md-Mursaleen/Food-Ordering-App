import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

function BasketItems({ items }) {
    const navigation = useNavigation();
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ".." : string;
    }
    return (
        <>
            <View>
                {items.map((item, index) => (
                    <Pressable key={index} onPress={() => navigation.navigate("OrderInfo", {
                        item: item
                    })}>
                        <View style={
                            [styles.basketItems, items.indexOf(item) === items.length - 1 && { marginBottom: 14 }]
                        }>
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
                                    <View style={
                                        {
                                            marginTop: 8
                                        }
                                    }>
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
                                        }>Deliver to San Antonio</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={
                                {
                                    marginLeft: "auto",
                                    right: 5
                                }
                            }>
                                <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />
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
                    </Pressable>
                ))}
            </View>
        </>
    );
}

export default BasketItems;

const styles = StyleSheet.create({
    viewcartButton: {
        width: "90%",
        height: 55,
        marginBottom: 10,
        marginTop: "auto",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        borderRadius: 10
    },
    checkoutButton: {
        width: "95%",
        height: 55,
        marginBottom: 10,
        marginTop: "auto",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        borderRadius: 10
    },
    basketItems: {
        marginTop: 25,
        marginLeft: 15,
        flexDirection: "row",
        alignItems: "center"
    }
});