import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

function AllCategoriesRow(props) {
    const navigation = useNavigation();
    return (
        <View style={
            {
                marginTop: 15,
                flexDirection: "row",
                justifyContent: "space-between",
            }
        }>
            <Pressable style={
                {
                    width: 170,
                    height: 140,
                    marginLeft: 20,
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "#D7D7D7",
                    borderRadius: 16
                }
            }
                onPress={() => navigation.navigate("SearchItems", {
                    name: props.name1,
                    title: props.title1
                })}>
                <View>
                    <Image source={
                        {
                            uri: props.location1
                        }
                    } style={
                        {
                            height: 100,
                            width: 168,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15
                        }
                    } />
                </View>
                <View style={
                    {
                        marginTop: 9,
                        alignItems: "center"
                    }
                }>
                    <Text style={
                        {
                            fontWeight: "500"
                        }
                    }>{props.name1}</Text>
                </View>
            </Pressable>
            <Pressable style={
                {
                    width: 170,
                    height: 140,
                    marginRight: 20,
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "#D7D7D7",
                    borderRadius: 16
                }
            }
                onPress={() => navigation.navigate("SearchItems", {
                    name: props.name2,
                    title: props.title2
                })}>
                <View>
                    <Image source={
                        {
                            uri: props.location2
                        }
                    } style={
                        {
                            height: 100,
                            width: 168,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15
                        }
                    } />
                </View>
                <View style={
                    {
                        marginTop: 9,
                        alignItems: "center"
                    }
                }>
                    <Text style={
                        {
                            fontWeight: "500"
                        }
                    }>{props.name2}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default AllCategoriesRow;