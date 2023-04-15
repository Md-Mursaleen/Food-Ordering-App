import React, { useState, useEffect } from "react";
import { Pressable, Text, View, StatusBar, ScrollView, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebase";
import "firebase/compat/firestore";
import OrderedItems from "../components/OrderedItems";

function OrdersDetailScreen() {
    const navigation = useNavigation();
    const [lastOrder, setLastOrder] = useState([]);
    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db.collection("orders").orderBy("createdAt", "desc").limit(1).onSnapshot((snapshot) => {
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
                [styles.Container, lastOrder.items && { backgroundColor: "white" }]
            }>
                <View style={
                    [styles.orderContainer, lastOrder.items && { backgroundColor: "#F6F6F6" }]
                }>
                    <Pressable style={
                        {
                            right: 100
                        }
                    } onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={25} />
                    </Pressable>
                    <Text style={
                        {
                            marginRight: 25,
                            fontSize: 20,
                            fontWeight: "500"
                        }
                    }>Your orders</Text>
                </View>
                {lastOrder.items ? (
                    <OrderedItems items={lastOrder.items} />
                ) : (
                    <View style={
                        {
                            marginTop: 260
                        }
                    }>
                        <View style={
                            {
                                alignSelf: "center"
                            }
                        }>
                            <FontAwesome5 name="receipt" size={50} color="#D7D7D7" />
                        </View>
                        <View style={
                            {
                                marginTop: 25,
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        }>
                            <Text style={
                                {
                                    marginBottom: 15,
                                    fontSize: 20,
                                    fontWeight: "500"
                                }
                            }>No orders yet</Text>
                            <View style={
                                {
                                    alignSelf: "center"
                                }
                            }>
                                <Text style={{ fontSize: 15 }}>When you place your first order, it will appear here</Text>
                            </View>
                            <Pressable style={
                                {
                                    width: 100,
                                    height: 45,
                                    marginTop: 15,
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 50
                                }
                            }
                                onPress={() => navigation.navigate("Home")}>
                                <Text style={
                                    {
                                        fontSize: 15,
                                        color: "white"
                                    }
                                }>Find food</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            </ScrollView>
        </>
    );
}

export default OrdersDetailScreen;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#F6F6F6"
    },
    orderContainer: {
        padding: 15,
        marginTop: 35,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    }
});