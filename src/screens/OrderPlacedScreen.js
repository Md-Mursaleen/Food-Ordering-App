import React, { useState } from "react";
import { View, Text, Pressable, StatusBar, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import firebase from "../../firebase";
import "firebase/compat/firestore";
import { useDispatch, useSelector } from "react-redux";

const OrderPlacedScreen = ({ route }) => {
    const navigation = useNavigation();
    const [tipPrice, setTipPrice] = useState(4);
    const dispatch = useDispatch();
    const { item, getTotal, dessertPrice } = route.params;
    const addOrderItemtoFirebase = (item) =>
        dispatch({
            type: "ADD_THE_ORDER",
            payload: { ...item, resturantName: item.resturantName, resturantImage: item.resturantImage, resturantAddress: item.resturantAddress, quantity: item.quantity, total: Number(getTotal) + tipPrice }
        });
    const { items } = useSelector((state) => state.cartReducer.selectedOrderItems);
    const db = firebase.firestore();
    db.collection("orders").add({
        items: items,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="black" hidden={false} translucent={true} />
            <View style={
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
                        marginTop: 5,
                        fontSize: 32,
                        fontWeight: "600"
                    }
                }>Show your support</Text>
                <Text style={
                    {
                        marginLeft: 15,
                        fontSize: 32,
                        fontWeight: "600"
                    }
                }>with a tip</Text>
                <View style={
                    {
                        marginLeft: 15,
                        marginTop: 20,
                        maxWidth: 360
                    }
                }>
                    <Text style={
                        {
                            fontSize: 15,
                            lineHeight: 22,
                            color: "grey"
                        }
                    }>100% of your tip goes to your courier. Tips are based on your order total of {"\u00A3"}{getTotal} before any discounts or promotions.</Text>
                </View>
                <View style={
                    {
                        marginLeft: 15,
                        marginTop: 30,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }
                }>
                    <View style={
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }>
                        <Image source={require("../../assets/images/star.png")} style={
                            {
                                width: 28,
                                height: 28,
                                resizeMode: "contain",
                                borderRadius: 50
                            }
                        } />
                        <Text style={
                            {
                                marginLeft: 15,
                                fontSize: 17,
                                fontWeight: "500"
                            }
                        }>Cheers to you</Text>
                    </View>
                    <Pressable style={
                        [styles.tipContainer, tipPrice === 2 && { backgroundColor: "black" }]
                    }
                        onPress={() => setTipPrice(2)}>
                        <Text style={
                            [styles.textContainer, tipPrice === 2 && { color: "white" }]
                        }>{"\u00A3"}2.00</Text>
                    </Pressable>
                </View>
                <View style={
                    {
                        marginLeft: 15,
                        marginTop: 30,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }
                }>
                    <View style={
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }>
                        <Image source={require("../../assets/images/yellowstar.png")} style={
                            {
                                width: 28,
                                height: 28,
                                resizeMode: "contain",
                                borderRadius: 50
                            }
                        } />
                        <Text style={
                            {
                                marginLeft: 15,
                                fontSize: 17,
                                fontWeight: "500"
                            }
                        }>You 're great</Text>
                    </View>
                    <Pressable style={
                        [styles.tipContainer, tipPrice === 3 && { backgroundColor: "black" }]
                    }
                        onPress={() => setTipPrice(3)}>
                        <Text style={
                            [styles.textContainer, tipPrice === 3 && { color: "white" }]
                        }>{"\u00A3"}3.00</Text>
                    </Pressable>
                </View>
                <View style={
                    {
                        marginLeft: 15,
                        marginTop: 30,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }
                }>
                    <View style={
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }>
                        <Image source={require("../../assets/images/blackstar.png")} style={
                            {
                                width: 28,
                                height: 28,
                                resizeMode: "contain",
                                borderRadius: 50
                            }
                        } />
                        <Text style={
                            {
                                marginLeft: 15,
                                fontSize: 17,
                                fontWeight: "500"
                            }
                        }>Thank you so much</Text>
                    </View>
                    <Pressable style={
                        [styles.tipContainer, tipPrice === 4 && { backgroundColor: "black" }]
                    }
                        onPress={() => setTipPrice(4)}>
                        <Text style={
                            [styles.textContainer, tipPrice === 4 && { color: "white" }]
                        }>{"\u00A3"}4.00</Text>
                    </Pressable>
                </View>
                <View style={
                    {
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 25,
                        borderBottomColor: "#E5E5E5",
                        borderBottomWidth: 1
                    }
                } />
                <View style={
                    {
                        marginTop: 20,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }>
                    <Text style={
                        {
                            fontSize: 17
                        }
                    }>Your tip: </Text>
                    <Text style={
                        {
                            fontSize: 17,
                            fontWeight: "500"
                        }
                    }>{"\u00A3"}{tipPrice}.00</Text>
                </View>
                <Pressable style={
                    {
                        width: "92%",
                        height: 55,
                        marginBottom: 15,
                        marginTop: 240,
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#06C167",
                        borderRadius: 10
                    }
                } onPress={() => {
                    addOrderItemtoFirebase(item); navigation.navigate("OrderCompleted", {
                        resturantName: item.resturantName,
                        item: item,
                        getTotal: Number(getTotal) + tipPrice
                    })
                }}>
                    <Text style={
                        {
                            fontSize: 18,
                            fontWeight: "500",
                            color: "white"
                        }
                    }>Place order</Text>
                </Pressable>
            </View>
        </>
    );
}

export default OrderPlacedScreen;

const styles = StyleSheet.create({
    tipContainer: {
        width: 62,
        height: 34,
        marginRight: 16,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    textContainer: {
        fontWeight: "500",
        color: "black"
    }
});