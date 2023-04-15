import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View, StatusBar, ScrollView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import BasketItems from "../components/BasketItems";
import firebase from "../../firebase";
import "firebase/compat/firestore";
import BottomTabs from "../components/BottomTabs";

function BasketScreen() {
    const navigation = useNavigation();
    const [lastOrder, setLastOrder] = useState([]);
    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db.collection("basketitems").orderBy("createdAt", "desc").limit(1).onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastOrder(doc.data());
            });
        });
        return () => unsubscribe();
    }, []);
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="black" hidden={false} translucent={true} />
            <ScrollView showsVerticalScrollIndicator={false} style={
                {
                    marginTop: 20
                }
            }>
                <TouchableOpacity style={
                    {
                        marginTop: 20,
                        marginLeft: "auto",
                        marginRight: 15,
                        width: 90,
                        height: 40,
                        flexDirection: "row",
                        backgroundColor: "#F1F1F1",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 30
                    }
                } activeOpacity={1} onPress={() => navigation.navigate("Order")}>
                    <FontAwesome5 name="receipt" size={18} />
                    <Text style={
                        {
                            marginLeft: 10,
                            fontWeight: "500"
                        }
                    }>Orders</Text>
                </TouchableOpacity>
                <View style={
                    {
                        marginLeft: 20,
                        marginTop: 5
                    }
                }>
                    <Text style={
                        {
                            fontSize: 30,
                            fontWeight: "600"
                        }
                    }>Carts</Text>
                </View>
                {lastOrder.items ? (
                    <BasketItems items={lastOrder.items} />
                ) : (
                    <View style={
                        {
                            marginTop: 30,
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }>
                        <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/016/911/594/original/shopping-cart-icon-in-comic-style-trolley-cartoon-illustration-on-white-isolated-background-basket-splash-effect-business-concept-vector.jpg" }} style={
                            {
                                height: 180,
                                width: 180,
                                resizeMode: "contain"
                            }
                        } />
                        <Text style={
                            {
                                marginBottom: 15,
                                fontSize: 20,
                                fontWeight: "600"
                            }
                        }>Add items to start a cart</Text>
                        <View style={
                            {
                                alignItems: "center"
                            }
                        }>
                            <Text style={{ fontSize: 16, color: "grey" }}>Once you add items from a restaurant or store, </Text>
                            <Text style={{ fontSize: 16, color: "grey" }}>your cart will appear here.</Text>
                        </View>
                        <Pressable style={
                            {
                                width: 130,
                                height: 40,
                                marginTop: 15,
                                backgroundColor: "black",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 50
                            }
                        }
                            onPress={() => navigation.navigate("Search")}>
                            <Text style={
                                {
                                    fontSize: 15,
                                    color: "white"
                                }
                            }>Start shopping</Text>
                        </Pressable>
                    </View>
                )}
            </ScrollView>
            <View style={{ backgroundColor: "white", borderTopColor: "#eee", borderTopWidth: 1 }}>
                <BottomTabs />
            </View>
        </>
    );
}

export default BasketScreen;