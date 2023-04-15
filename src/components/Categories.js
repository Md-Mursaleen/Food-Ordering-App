import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Categories({ items, marginTop, width, height }) {
    const navigation = useNavigation();
    return (
        <View style={
            {
                marginTop: 10,
                paddingVertical: 10,
                paddingLeft: 20,
                backgroundColor: "white"
            }
        }>
            <TouchableOpacity
                activeOpacity={1}
                key={items.id}
                onPress={() => navigation.navigate("SearchItems", {
                    name: items.text,
                    title: items.title
                })}>
                <View style={
                    {
                        marginRight: 20,
                        alignItems: "center"
                    }
                }>
                    <Image source={items.image} style={{
                        width: width,
                        height: height,
                        resizeMode: "contain"
                    }} />

                    <Text style={{
                        marginTop: marginTop,
                        fontSize: 14,
                        fontWeight: "500",
                        color: "#292929"
                    }}>{items.text}</Text>

                </View>
            </TouchableOpacity>
        </View>
    );
}