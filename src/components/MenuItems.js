import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const style = StyleSheet.create({
    MenuItemStyle: {
        margin: 10,
        marginTop: 15,
        flexDirection: "row",
        justifycontent: "space-between"
    },
    titleStyle: {
        fontSize: 17,
        fontWeight: "500"
    }
});

export default function MenuItems({ foods, restName, image, address, marginLeft, information, instruction }) {
    const navigation = useNavigation();
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ".." : string;
    }
    return (
        <>
            {foods.map((food, index) => (
                <Pressable
                    key={index}
                    onPress={() => navigation.navigate("Cart", {
                        name: food.title,
                        description: food.description,
                        restName: restName,
                        restimage: image,
                        restAddress: address,
                        image: food.image,
                        price: food.price,
                        notfood: false,
                        food: food,
                        information: information,
                        instruction: instruction
                    })}>
                    <View style={
                        [style.MenuItemStyle, food.image && { marginTop: 15 }]
                    }
                    >
                        <FoodInfo food={food} truncate={truncate} />
                        <FoodImage food={food} marginLeft={marginLeft} />
                    </View>
                </Pressable>
            ))
            }
        </>
    );
}
const FoodInfo = (props) => (
    <View style={
        [styles, props.food.image && { width: 230 }]
    }>
        <Text style={
            style.titleStyle
        }>{props.food.title}</Text>
        <Text style={
            {
                marginTop: 5
            }
        }>{"\u00A3"}{props.food.price}</Text>
        <Text style={
            {
                maxWidth: 220,
                fontSize: 14,
                color: "#8f8f8f",
            }
        }>{props.food.description}</Text>
    </View>
);
const FoodImage = ({ marginLeft, ...props }) => (
    <View style={{ marginLeft: marginLeft }}>
        {props.food.image && (
            <Image
                source={{
                    uri: props.food?.image
                }}
                style={{
                    width: 110,
                    height: 110
                }} />
        )}
    </View>
);

const styles = StyleSheet.create({
    infoContainer: {
        width: 0
    }
});