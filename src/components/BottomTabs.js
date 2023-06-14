import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

export default function BottomTabs() {
    const navigation = useNavigation();
    return (
        <View style={
            {
                margin: 9,
                marginHorizontal: 30,
                flexDirection: "row",
                justifyContent: "space-between"
            }
        }>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Home")}><Icon icon="home" text="Home" /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Search")}><Icon icon="search" text="Browse" /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Basket")}><Icon icon="shopping-cart" text="Baskets" /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Profile")}><Icon icon="user-alt" text="Account" /></TouchableOpacity>
        </View>
    );
}
const Icon = (props) => (
    <View style={{ alignItems: "center" }}>
        <FontAwesome5
            name={props.icon}
            size={22}
            color="grey"
            style={
                {
                    marginBottom: 3,
                    alignSelf: "center"
                }
            } />
        <Text style={
            {
                fontSize: 13,
                fontWeight: "450",
                color: "grey"
            }
        }>{props.text}</Text>
    </View>
);