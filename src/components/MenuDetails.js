import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

function MenuDetails({ menuitems }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={
            {
                marginHorizontal: 20,
                paddingVertical: 10,
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "lightgrey"
            }
        }
            onPress={() => navigation.navigate("Menu", {
                id: menuitems.id
            })}>
            <View style={{ flex: 1 }}>
                <Text style={
                    {
                        fontSize: 16,
                        fontWeight: "600",
                        letterSpacing: 0.5
                    }
                }>{menuitems.name}</Text>
                <Text style={
                    {
                        marginVertical: 5,
                        color: "gray"
                    }
                }
                    numberOfLines={2}>{menuitems.description}</Text>
                <Text style={{ fontSize: 16 }}>$ {menuitems.price}</Text>
            </View>
            {menuitems.image && (<Image source={{
                uri: menuitems.image
            }}
                style={{
                    height: 75,
                    aspectRatio: 1,
                    borderRadius: 5
                }} />)}
        </TouchableOpacity>
    );
}

export default MenuDetails;