import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import ProfileDetails from "../components/ProfileDetails";
import BottomTabs from "../components/BottomTabs";
import { useNavigation } from "@react-navigation/native";

function ProfileScreen() {
    const navigation = useNavigation();
    return (
        <View style={
            {
                marginTop: 30
            }
        }>
            <View style={
                {
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }
            }>
                <Text style={
                    {
                        marginLeft: 20,
                        fontSize: 34,
                        fontWeight: "600"
                    }
                }>
                    Md Mursaleen
                </Text>
                <View style={
                    {
                        width: 65,
                        height: 65,
                        marginRight: 20,
                        backgroundColor: "#eee",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 50
                    }
                }>
                    <Pressable style={
                        {
                            width: 55,
                            height: 55,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#F6F6F6",
                            borderRadius: 50
                        }
                    }
                        onPress={() => navigation.navigate("ProfileSetting")}><Entypo name="user" size={30} color="#CDCDCD" /></Pressable>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={
                    {
                        marginTop: 20,
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }
                }>
                    <View style={
                        {
                            width: 110,
                            height: 100,
                            marginLeft: 15,
                            backgroundColor: "#F6F6F6",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 15
                        }
                    }>
                        <Image source={require("../../assets/images/favourite.png")} style={{ width: 35, height: 45, resizeMode: "contain" }} />
                        <Text style={
                            {
                                fontSize: 15,
                                fontWeight: "500"
                            }
                        }>Favourite</Text>
                    </View>
                    <View style={
                        {
                            width: 110,
                            height: 100,
                            backgroundColor: "#F6F6F6",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 15
                        }
                    }>
                        <Image source={require("../../assets/images/wallet.png")} style={{ width: 35, height: 45, resizeMode: "contain" }} />
                        <Text style={
                            {
                                fontSize: 15,
                                fontWeight: "500"
                            }
                        }>Wallet</Text>
                    </View>
                    <Pressable style={
                        {
                            width: 110,
                            height: 100,
                            marginRight: 15,
                            backgroundColor: "#F6F6F6",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 15
                        }
                    }
                        onPress={() => navigation.navigate("Order")}>
                        <Image source={require("../../assets/images/order.png")} style={{ width: 35, height: 45, resizeMode: "contain" }} />
                        <Text style={
                            {
                                fontSize: 15,
                                fontWeight: "500"
                            }
                        }>Orders</Text>
                    </Pressable>
                </View>
                <View style={
                    {
                        marginTop: 20,
                        borderTopWidth: 7,
                        borderTopColor: "#F1F1F1"
                    }
                }>
                    <ProfileDetails />
                </View>
            </ScrollView>
            <View style={{ marginTop: "auto", backgroundColor: "white", borderTopColor: "#eee", borderTopWidth: 1 }}>
                <BottomTabs />
            </View>
        </View>
    );
}

export default ProfileScreen;