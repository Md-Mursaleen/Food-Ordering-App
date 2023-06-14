import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, Image, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const OrderInfoScreen = ({ route }) => {
    const navigation = useNavigation();
    const { item } = route.params;
    const [quantity, setQuantity] = useState(item.quantity);
    const getTotal = () => {
        return (Number(Number(item.price) * quantity)).toFixed(2);
    };
    const dessertPrice = item.total - Number(item.price) * quantity;
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ".." : string;
    }
    return (
        <>
            <ScrollView style={
                {
                    marginTop: 50
                }
            }>
                <Pressable style={
                    {
                        marginLeft: 15,
                        marginBottom: 10
                    }
                }
                    onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={23} />
                </Pressable>
                <Text style={
                    {
                        marginLeft: 15,
                        marginTop: 10,
                        fontSize: 25,
                        fontWeight: "600"
                    }
                }>{item.resturantName} ({truncate(item.resturantAddress, 25)})</Text>
                <View style={
                    {
                        marginTop: 18,
                        marginLeft: 15,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }
                }>
                    <Text style={
                        {
                            fontSize: 16,
                            fontWeight: "500"
                        }
                    }>{quantity} items</Text>
                    <View style={
                        {
                            marginRight: 15,
                            flexDirection: "row",
                            alignItems: "center"
                        }
                    }>
                        <Text style={
                            {
                                fontSize: 16,
                                fontWeight: "500",
                                color: "grey"
                            }
                        }>Subtotal: </Text>
                        <Text style={
                            {
                                fontSize: 16,
                                fontWeight: "500"
                            }
                        }>{"\u00A3"}{getTotal()}</Text>
                    </View>
                </View>
                <View style={
                    {
                        marginHorizontal: 15,
                        marginTop: 20,
                        borderBottomColor: "#e2e2e2",
                        borderBottomWidth: 1
                    }
                } />
                <View style={
                    {
                        marginTop: 15,
                        flexDirection: "row"
                    }
                }>
                    <View>
                        <View style={
                            {
                                marginLeft: 15,
                                flexDirection: "row"
                            }
                        }>
                            <Text style={
                                {
                                    fontSize: 20,
                                    fontWeight: "500"
                                }
                            }>{item.title}</Text>
                        </View>
                    </View>
                    <Image source={{
                        uri: item.uri || item.image
                    }} style={
                        [styles.imageStyle, item.uri && { resizeMode: "contain" }]
                    } />
                </View>
                <View style={
                    {
                        flexDirection: "row",
                        alignItems: "center"
                    }
                }>
                    <View style={
                        [styles.iconContainer, quantity >= 10 && { width: 130 }]
                    }>
                        <Pressable
                            onPress={() => { if (quantity > 1) { setQuantity(quantity - 1) } }}>
                            <Entypo name="minus" size={25} style={
                                [styles.iconColor, quantity > 1 && { color: "black" }]
                            } />
                        </Pressable>
                        <Text style={
                            {
                                marginHorizontal: 25
                            }
                        }>{quantity}</Text>
                        <Pressable
                            onPress={() => setQuantity(quantity + 1)}>
                            <Entypo name="plus" size={25} />
                        </Pressable>
                    </View>
                    <Text style={
                        {
                            marginLeft: "auto",
                            marginTop: 15,
                            marginRight: 15,
                            fontSize: 16,
                            fontWeight: "500"
                        }
                    }>{"\u00A3"}{getTotal()}</Text>
                </View>
                <View style={
                    {
                        marginHorizontal: 15,
                        marginTop: 20,
                        borderBottomColor: "#e2e2e2",
                        borderBottomWidth: 1
                    }
                } />
                <View style={
                    {
                        marginTop: 25,
                        marginLeft: 20,
                        flexDirection: "row",
                        alignItems: "center"
                    }
                }>
                    <Ionicons name="pricetag-sharp" size={25} />
                    <View style={
                        {
                            marginLeft: 20
                        }
                    }>
                        <Text style={
                            {
                                fontSize: 17,
                                fontWeight: "500"
                            }
                        }>Add a promo</Text>
                    </View>
                    <View style={
                        {
                            marginLeft: "auto",
                            marginRight: 15
                        }
                    }>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
                    </View>
                </View>
                <View style={
                    {
                        marginHorizontal: 15,
                        marginTop: 25,
                        borderBottomColor: "#cdcdcd",
                        borderBottomWidth: 1
                    }
                } />
                <View style={
                    {
                        marginTop: 18,
                        marginLeft: 15,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }
                }>
                    <Text style={
                        {
                            fontSize: 22,
                            fontWeight: "600"
                        }
                    }>Subtotal</Text>
                    <Text style={
                        {
                            marginRight: 15,
                            fontSize: 18,
                            fontWeight: "500"
                        }
                    }>{"\u00A3"}{getTotal()}</Text>
                </View>
            </ScrollView>
            <View style={
                {
                    marginBottom: 14,
                    borderBottomColor: "#eee",
                    borderBottomWidth: 1
                }
            } />
            <Pressable style={
                {
                    width: "93%",
                    height: 55,
                    marginBottom: 16,
                    marginTop: "auto",
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "black",
                    borderRadius: 10
                }
            }
                onPress={() => navigation.navigate("Checkout", {
                    item: item,
                    getTotal: getTotal(),
                    dessertPrice: dessertPrice
                })}>
                <Text style={
                    {
                        fontSize: 18,
                        fontWeight: "500",
                        color: "white"
                    }
                }>Go to checkout</Text>
            </Pressable>
            <Pressable style={
                {
                    width: "93%",
                    height: 55,
                    marginBottom: 16,
                    marginTop: "auto",
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#eaeaea",
                    borderRadius: 10
                }
            } onPress={() => navigation.navigate("Cart", {
                name: item.title || item.text,
                description: item.description,
                restName: item.resturantName,
                restimage: item.resturantImage,
                restAddress: item.resturantAddress,
                image: item.image || item.uri,
                price: item.price,
                notfood: item.text && true,
                food: item,
                information: false,
                instruction: false
            })}>
                <Text style={
                    {
                        fontSize: 18,
                        fontWeight: "500",
                        color: "black"
                    }
                }>Add items</Text>
            </Pressable>
        </>
    );
}

export default OrderInfoScreen;

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: 300,
        resizeMode: "cover"
    },
    imageStyle: {
        marginLeft: "auto",
        marginRight: 15,
        width: 55,
        height: 55
    },
    buttonContainer: {
        width: 45,
        height: 45,
        marginLeft: 25,
        marginTop: 45,
        position: "absolute",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    iconContainer: {
        width: 120,
        height: 35,
        marginLeft: 15,
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee",
        borderRadius: 30
    },
    iconColor: {
        color: "grey"
    }
});