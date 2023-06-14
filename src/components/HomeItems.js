import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Pressable } from "react-native";

function HomeItems({ items, marginBottom, restName, image, address, notfood, groceries }) {
    const navigation = useNavigation();
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "" : string;
    }
    return (
        <Pressable style={
            {
                marginTop: 15,
                marginLeft: 15,
                marginBottom: marginBottom,
                marginRight: 15
            }
        }
            onPress={() => navigation.navigate("Cart", {
                name: items.text,
                restName: restName,
                restimage: image,
                restAddress: address,
                image: items.uri,
                price: items.price,
                notfood: notfood,
                food: items,
                information: false,
                instruction: false,
                groceries: groceries
            })}>
            <View>
                <Image source={{
                    uri: items.uri
                }} style={
                    {
                        height: 120,
                        width: 120,
                        resizeMode: "contain"
                    }
                } />
                <View style={
                    {
                        marginTop: 15,
                        maxWidth: 120
                    }
                }>
                    <Text style={
                        {
                            fontSize: 15,
                            fontWeight: "500",
                            lineHeight: 18
                        }
                    }>{truncate(items.text, 36)}</Text>
                </View>
                <View style={{ marginTop: 3 }}>
                    <Text>{"\u00A3"}{items.price}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default HomeItems;