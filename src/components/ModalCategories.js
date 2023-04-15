import React from "react";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";

const items = {
    pharmacy: require("../../assets/images/pharmacy.png"),
    coffee: require("../../assets/images/coffee.png"),
    desserts: require("../../assets/images/dessert.png"),
    softdrink: require("../../assets/images/softdrink.png"),
    flowers: require("../../assets/images/flower.png"),
    resturant: require("../../assets/images/resturant.png"),
    grocery: require("../../assets/images/grocery.png"),
    alcohol: require("../../assets/images/alcohol.png"),
    ride: require("../../assets/images/ride.png"),
    icecream: require("../../assets/images/icecream.png")
};

function ModalCategories(props) {
    return (
        <View style={
            {
                flexDirection: "row",
                marginBottom: props.marginBottom,
                justifyContent: "space-between"
            }
        }>
            {items[props.item1] && (
                <Pressable style={
                    {
                        alignItems: "center"
                    }
                }>
                    <View style={
                        {
                            width: 85,
                            height: 70,
                            marginLeft: 12,
                            padding: 10,
                            marginTop: 10,
                            backgroundColor: "#F6F6F6",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10
                        }
                    }>
                        <View style={
                            [styles.imageContainer, props.text1 === "Ride" && { marginLeft: 15, marginBottom: 10 }]
                        }>
                            <Image source={items[props.item1]} style={
                                [styles.imageSize, props.text1 === "Ride" && { width: 100, height: 100 }, props.text1 === "Alcohol" && { width: 40, height: 45 }, props.text1 === "Pharmacy" && { width: 40, height: 45, resizeMode: "cover" }]
                            } />
                        </View>
                    </View>
                    <Text style={
                        {
                            marginLeft: 12,
                            marginTop: 5,
                            fontSize: 12,
                            fontWeight: "500"
                        }
                    }>{props.text1}</Text>
                </Pressable>
            )}
            {items[props.item2] && (
                <View style={
                    {
                        alignItems: "center"
                    }
                }>
                    <View style={
                        {
                            width: 85,
                            height: 70,
                            padding: 10,
                            marginTop: 10,
                            backgroundColor: "#F6F6F6",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10
                        }
                    }>
                        <Image source={items[props.item2]} style={
                            {
                                width: 40,
                                height: 50,
                                resizeMode: "contain"
                            }
                        } />
                    </View>
                    <Text style={
                        {
                            marginTop: 5,
                            fontSize: 12,
                            fontWeight: "500"
                        }
                    }>{props.text2}</Text>
                </View>
            )}
            {items[props.item3] && (
                <View style={
                    {
                        alignItems: "center"
                    }
                }>
                    <View style={
                        {
                            width: 85,
                            height: 70,
                            padding: 10,
                            marginTop: 10,
                            backgroundColor: "#F6F6F6",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10
                        }
                    }>
                        <Image source={items[props.item3]}
                            style={
                                {
                                    width: 40,
                                    height: 50,
                                    resizeMode: "contain"
                                }
                            } />
                    </View>
                    <Text style={
                        {
                            marginTop: 5,
                            fontSize: 12,
                            fontWeight: "500"
                        }
                    }>{props.text3}</Text>
                </View>
            )}
            {items[props.item4] && (
                <View style={
                    {
                        alignItems: "center"
                    }
                }>
                    <View style={
                        {
                            width: 85,
                            height: 70,
                            padding: 10,
                            marginTop: 10,
                            marginRight: 12,
                            backgroundColor: "#F6F6F6",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10
                        }
                    }>
                        <Image source={items[props.item4]}
                            style={
                                {
                                    width: 40,
                                    height: 50,
                                    resizeMode: "contain"
                                }
                            } />
                    </View>
                    <Text style={
                        {
                            marginTop: 5,
                            fontSize: 12,
                            fontWeight: "500"
                        }
                    }>{props.text4}</Text>
                </View>
            )}
        </View >
    );
}

export default ModalCategories;

const styles = StyleSheet.create({
    imageSize: {
        width: 40,
        height: 50,
        resizeMode: "contain"
    },
    imageContainer: {
        marginLeft: 0,
        marginBottom: 0
    }
});