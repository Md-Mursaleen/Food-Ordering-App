import React, { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import ModalCategories from "./ModalCategories";

function CategoriesItems() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)"
        }
    });
    const checkoutModalContent = () => {
        return (
            <View style={
                styles.modalContainer
            }>
                <View style={
                    {
                        marginTop: "auto",
                        height: 420,
                        width: "100%",
                        backgroundColor: "white"
                    }
                }>
                    <View style={
                        {
                            marginTop: 15,
                            alignItems: "center"
                        }
                    }>
                        <Text style={
                            {
                                marginBottom: 15,
                                fontSize: 18,
                                fontWeight: "500"
                            }
                        }>All categories</Text>
                    </View>
                    <ModalCategories item1="alcohol" item2="coffee" item3="desserts" item4="resturant" marginBottom={5} text1="Alcohol" text2="Coffee" text3="Dessert" text4="Restaurants" />
                    <ModalCategories item1="pharmacy" item2="flowers" item3="grocery" item4="icecream" marginBottom={5} text1="Pharmacy" text2="Flowers" text3="Grocery" text4="Ice cream" />
                    <ModalCategories item1="ride" marginBottom={0} text1="Ride" />
                </View>
            </View>
        );
    };
    return (
        <View>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            <View style={
                {
                    flexDirection: "row",
                    justifyContent: "space-between"
                }
            }>
                <Pressable style={
                    {
                        width: 175,
                        height: 90,
                        padding: 8,
                        marginTop: 8,
                        marginLeft: 15,
                        backgroundColor: "#F4F4F4",
                        borderRadius: 10
                    }
                }
                    onPress={() => navigation.navigate("Resturants")}>
                    <Image source={require("../../assets/images/resturant.png")} style={
                        {
                            width: 45,
                            height: 50,
                            marginLeft: "auto",
                            resizeMode: "contain"
                        }
                    } />
                    <Text style={
                        {
                            marginLeft: 5,
                            marginTop: 5,
                            fontSize: 16,
                            fontWeight: "500"
                        }
                    }>Restaurants</Text>
                </Pressable>
                <Pressable style={
                    {
                        width: 175,
                        height: 90,
                        padding: 8,
                        marginTop: 8,
                        marginRight: 15,
                        backgroundColor: "#F4F4F4",
                        borderRadius: 10
                    }
                }
                    onPress={() => navigation.navigate("Categories", {
                        title: "Grocery",
                        placeHolder: "Search grocery"
                    })}>
                    <Image source={require("../../assets/images/grocery.png")} style={
                        {
                            width: 45,
                            height: 50,
                            marginLeft: "auto",
                            resizeMode: "contain"
                        }
                    } />
                    <Text style={
                        {
                            marginLeft: 5,
                            marginTop: 5,
                            fontSize: 16,
                            fontWeight: "500"
                        }
                    }>Grocery</Text>
                </Pressable>
            </View>
            <View style={
                {
                    flexDirection: "row",
                    justifyContent: "space-between"
                }
            }>
                <View style={{ alignItems: "center" }}>
                    <Pressable style={
                        {
                            width: 85,
                            height: 70,
                            padding: 10,
                            marginTop: 10,
                            marginLeft: 12,
                            backgroundColor: "#F4F4F4",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10
                        }
                    }
                        onPress={() => navigation.navigate("Categories", {
                            title: "Alcohol",
                            placeHolder: "Search alcohol"
                        })}>
                        <Image source={require("../../assets/images/alcohol.png")} style={
                            {
                                width: 40,
                                height: 45,
                                resizeMode: "contain"
                            }
                        } />
                    </Pressable>
                    <Text style={
                        {
                            marginLeft: 12,
                            marginTop: 5,
                            fontSize: 12,
                            fontWeight: "500"
                        }
                    }>Alcohol</Text>
                </View>
                <View style={
                    {
                        alignItems: "center"
                    }
                }>
                    <Pressable style={
                        {
                            width: 85,
                            height: 70,
                            padding: 10,
                            marginTop: 10,
                            backgroundColor: "#F4F4F4",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10
                        }
                    }
                        onPress={() => navigation.navigate("Categories", {
                            title: "Dessert",
                            placeHolder: "Search dessert"
                        })}>
                        <Image source={require("../../assets/images/dessert.png")} style={
                            {
                                width: 40,
                                height: 50,
                                resizeMode: "contain"
                            }
                        } />
                    </Pressable>
                    <Text style={
                        {
                            marginTop: 5,
                            fontSize: 12,
                            fontWeight: "500"
                        }
                    }>Dessert</Text>
                </View>
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
                            backgroundColor: "#F4F4F4",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10
                        }
                    }>
                        <View style={{
                            marginLeft: 15,
                            marginBottom: 10
                        }}>
                            <Image source={require("../../assets/images/ride.png")}
                                style={
                                    {
                                        width: 100,
                                        height: 100,
                                        resizeMode: "contain"
                                    }
                                } />
                        </View>
                    </View>
                    <Text style={
                        {
                            marginTop: 5,
                            fontSize: 12,
                            fontWeight: "500"
                        }
                    }>Ride</Text>
                </View>
                <View style={
                    {
                        alignItems: "center"
                    }
                }>
                    <Pressable style={
                        {
                            width: 85,
                            height: 70,
                            padding: 10,
                            marginTop: 10,
                            marginRight: 12,
                            backgroundColor: "#F4F4F4",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10
                        }
                    }
                        onPress={() => setModalVisible(true)}>
                        <SimpleLineIcons name="options" size={22} color="#696969" />
                    </Pressable>
                    <Text style={
                        {
                            marginTop: 5,
                            fontSize: 12,
                            fontWeight: "500"
                        }
                    }>See all</Text>
                </View>
            </View>
        </View>
    );
}

export default CategoriesItems;