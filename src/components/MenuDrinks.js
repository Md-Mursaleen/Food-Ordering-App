import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const style = StyleSheet.create({
    MenuItemStyle: {
        margin: 10,
        marginTop: 10,
        flexDirection: "row",
        justifycontent: "space-between"
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: "500"
    }
});

export default function MenuDrinks({ drinks, restName, image, address }) {
    const navigation = useNavigation();
    return (
        <>
            {drinks.map((drink, index) => (
                <Pressable
                    key={index}
                    onPress={() => navigation.navigate("Cart", {
                        name: drink.title,
                        description: drink.description,
                        restName: restName,
                        restimage: image,
                        restAddress: address,
                        image: drink.image,
                        price: drink.price,
                        notfood: false,
                        food: drink,
                        information: false,
                        instruction: false
                    })}>
                    <View style={
                        style.MenuItemStyle
                    }
                    >
                        <FoodInfo drink={drink} />
                        <FoodImage drink={drink} />
                    </View>
                </Pressable>
            ))
            }
        </>
    );
}
const FoodInfo = (props) => (
    <View style={
        {
            width: 230
        }
    }>
        <Text style={
            style.titleStyle
        }>{props.drink.title}</Text>
        <Text style={
            {
                marginTop: 5
            }
        }>{"\u00A3"}{props.drink.price}</Text>
    </View>
);
const FoodImage = (props) => (
    <View style={
        {
            marginLeft: 15
        }
    }>
        <Image
            source={{
                uri: props.drink.image
            }}
            style={{
                width: 110,
                height: 110
            }} />
    </View>
);