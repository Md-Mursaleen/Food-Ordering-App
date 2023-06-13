import React, { useState } from "react";
import { ScrollView, Text, View, Image, Pressable, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonTabs from "../components/ButtonTabs";
import { useNavigation } from "@react-navigation/native";

function CheckoutScreen({ route }) {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState("Delivery");
    const [isfasterBlack, setIsfasterBlack] = useState(false);
    const [isstandardBlack, setIsstandardBlack] = useState(false);
    const extradeliveryFee = isfasterBlack ? 2.99 : 0;
    const { item, getTotal, dessertPrice } = route.params;
    const [subTotal, setSubTotal] = useState(getTotal);
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ".." : string;
    }
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={
                {
                    marginTop: 50
                }
            }>
                <Pressable style={
                    {
                        marginLeft: 15,
                        marginBottom: 10
                    }
                }
                    onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={23} />
                </Pressable>
                <Text style={
                    {
                        marginLeft: 15,
                        marginTop: 5,
                        fontSize: 30,
                        fontWeight: "600"
                    }
                }>Checkout</Text>
                <View style={
                    {
                        marginTop: 20
                    }
                }>
                    <ButtonTabs activeTab={activeTab} setActiveTab={setActiveTab} checkout={true} />
                </View>
                <View style={
                    {
                        marginLeft: 25,
                        marginTop: 25,
                        flexDirection: "row",
                        alignItems: "center"
                    }
                }>
                    <Octicons name="location" size={25} />
                    <View style={
                        {
                            marginLeft: 20
                        }
                    }>
                        <Text style={
                            {
                                fontSize: 17,
                                fontWeight: "500"
                            }
                        }>San Antonio</Text>
                        <Text style={
                            {
                                marginTop: 5
                            }
                        }>TX</Text>
                    </View>
                    <View style={
                        {
                            marginLeft: "auto",
                            marginRight: 15
                        }
                    }>
                        <MaterialIcons name="keyboard-arrow-right" size={25} color="black" />
                    </View>
                </View>
                <View style={
                    {
                        marginLeft: 80,
                        marginTop: 15,
                        borderBottomColor: "#e2e2e2",
                        borderBottomWidth: 1
                    }
                } />
                <View style={
                    {
                        marginLeft: 25,
                        marginTop: 15,
                        flexDirection: "row",
                        alignItems: "center"
                    }
                }>
                    <FontAwesome5 name="user" size={25} color="black" />
                    <View style={
                        {
                            marginLeft: 25
                        }
                    }>
                        <Text style={
                            {
                                fontSize: 17,
                                fontWeight: "500"
                            }
                        }>Meet at door</Text>
                        <Text style={
                            {
                                marginTop: 5,
                                color: "green"
                            }
                        }>Add delivery note</Text>
                    </View>
                    <View style={
                        {
                            marginLeft: "auto",
                            marginRight: 15
                        }
                    }>
                        <MaterialIcons name="keyboard-arrow-right" size={25} color="black" />
                    </View>
                </View>
                <View style={
                    {
                        marginLeft: 80,
                        marginTop: 15,
                        borderBottomColor: "#e2e2e2",
                        borderBottomWidth: 1
                    }
                } />
                <View style={
                    {
                        marginLeft: 15,
                        marginTop: 15
                    }
                }>
                    <Text style={
                        {
                            fontSize: 20,
                            fontWeight: "600"
                        }
                    }>Delivery Options</Text>
                    <Pressable style={
                        [styles.fasterdeliveryContainer, isfasterBlack && { borderColor: "black" }]
                    } onPress={() => setIsfasterBlack(true) + setIsstandardBlack(true)} >
                        <MaterialCommunityIcons name="lightning-bolt" size={30} color="green" />
                        <View style={
                            {
                                marginLeft: 15
                            }
                        }>
                            <View style={
                                {
                                    flexDirection: "row",
                                    alignItems: "center"
                                }
                            }>
                                <Text style={
                                    {
                                        fontSize: 17,
                                        fontWeight: "500"
                                    }
                                }>Priority</Text>
                                <View style={
                                    {
                                        marginLeft: 10,
                                        width: 50,
                                        height: 23,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "green",
                                        borderRadius: 30
                                    }
                                }>
                                    <Text style={
                                        {
                                            fontSize: 12,
                                            color: "white"
                                        }
                                    }>Faster</Text>
                                </View>
                                <Text style={
                                    {
                                        marginLeft: 125,
                                        fontSize: 13
                                    }
                                }>+{"\u00A3"}2.99</Text>
                            </View>
                            <Text style={
                                {
                                    marginTop: 5,
                                    fontSize: 14,
                                    color: "#9d9d9d"
                                }
                            }>25-40 min(s) • Delivered directly to you</Text>
                        </View>
                    </Pressable>
                    <Pressable style={
                        [styles.standarddeliveryContainer, isstandardBlack && { borderColor: "#e2e2e2" }]
                    } onPress={() => setIsstandardBlack(false) + setIsfasterBlack(false)}>
                        <MaterialCommunityIcons name="clock-fast" size={30} />
                        <View style={
                            {
                                marginLeft: 15
                            }
                        }>
                            <Text style={
                                {
                                    fontSize: 17,
                                    fontWeight: "500"
                                }
                            }>Standard</Text>
                            <Text style={
                                {
                                    marginTop: 5,
                                    fontSize: 14,
                                    color: "#9d9d9d"
                                }
                            }>30-45 min(s)</Text>
                        </View>
                    </Pressable>
                    <View style={
                        {
                            marginTop: 20
                        }
                    }>
                        <View style={
                            {
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }
                        }>
                            <Text style={
                                {
                                    fontSize: 20,
                                    fontWeight: "600"
                                }
                            }>Your items</Text>
                            <Text style={
                                {
                                    marginRight: 20,
                                    color: "green"
                                }
                            }>See menu</Text>
                        </View>
                        <View style={
                            {
                                marginTop: 30,
                                flexDirection: "row"
                            }
                        }>
                            <Image source={{
                                uri: item.resturantImage
                            }} style={
                                {
                                    width: 45,
                                    height: 45,
                                    borderRadius: 50
                                }
                            } />
                            <View>
                                <View style={
                                    {
                                        marginLeft: 12,
                                        flexDirection: "row"
                                    }
                                }>
                                    <Text style={
                                        {
                                            fontSize: 16,
                                            fontWeight: "500"
                                        }
                                    }>{item.resturantName}</Text>
                                    <Text style={
                                        {
                                            marginLeft: 3,
                                            fontSize: 16,
                                            fontWeight: "500"
                                        }
                                    }>({truncate(item.resturantAddress, 14)})</Text>
                                </View>
                                <Text style={
                                    {
                                        marginLeft: 12,
                                        color: "grey"
                                    }
                                }>{item.quantity} item</Text>
                            </View>
                        </View>
                    </View>
                    <View style={
                        {
                            marginRight: 20,
                            marginTop: 15,
                            borderBottomColor: "#e2e2e2",
                            borderBottomWidth: 1
                        }
                    } />
                </View>
                <View style={
                    {
                        marginTop: 15
                    }
                }>
                    <View style={
                        {
                            width: 110,
                            height: 40,
                            marginLeft: 15,
                            backgroundColor: "#EAEAEA",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 30
                        }
                    }>
                        <Text style={
                            {
                                fontWeight: "500"
                            }
                        }>+ Add items</Text>
                    </View>
                </View>
                <View style={
                    {
                        marginTop: 25,
                        marginLeft: 20,
                        flexDirection: "row",
                        alignItems: "center"
                    }
                }>
                    <Ionicons name="md-gift-sharp" size={25} />
                    <View style={
                        {
                            marginLeft: 20
                        }
                    }>
                        <Text style={
                            {
                                fontSize: 17,
                                fontWeight: "500"
                            }
                        }>Make it a gift</Text>
                        <Text style={
                            {
                                marginTop: 3,
                                fontSize: 14,
                                color: "#9d9d9d"
                            }
                        }>Add recipient info and a message</Text>
                    </View>
                    <View style={
                        {
                            marginLeft: "auto",
                            marginRight: 15
                        }
                    }>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
                    </View>
                </View>
                <View style={
                    {
                        marginLeft: 60,
                        marginRight: 15,
                        marginTop: 15,
                        borderBottomColor: "#e2e2e2",
                        borderBottomWidth: 1
                    }
                } />
                <View style={
                    {
                        marginTop: 20,
                        marginLeft: 20,
                        flexDirection: "row",
                        alignItems: "center"
                    }
                }>
                    <Ionicons name="pricetag-sharp" size={25} />
                    <View style={
                        {
                            marginLeft: 20
                        }
                    }>
                        <Text style={
                            {
                                fontSize: 17,
                                fontWeight: "500"
                            }
                        }>Add a promo</Text>
                    </View>
                    <View style={
                        {
                            marginLeft: "auto",
                            marginRight: 15
                        }
                    }>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
                    </View>
                </View>
                <View style={
                    {
                        marginLeft: 60,
                        marginRight: 15,
                        marginTop: 20,
                        borderBottomColor: "#e2e2e2",
                        borderBottomWidth: 1
                    }
                } />
                <View style={
                    {
                        marginLeft: 15,
                        marginTop: 15
                    }
                }>
                    <View style={
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }
                    }>
                        <Text style={
                            {
                                fontSize: 16,
                                color: "#8a8a8a"
                            }
                        }>Subtotal</Text>
                        <Text style={
                            {
                                marginRight: 15,
                                fontSize: 15,
                                color: "#8a8a8a"
                            }
                        }>{"\u00A3"}{(Number(subTotal) + dessertPrice).toFixed(2)}</Text>
                    </View>
                    <View style={
                        {
                            marginTop: 15,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }
                    }>
                        <Text style={
                            {
                                fontSize: 16,
                                color: "#8a8a8a"
                            }
                        }>Delivery fee</Text>
                        <Text style={
                            {
                                marginRight: 15,
                                fontSize: 15,
                                color: "#8a8a8a"
                            }
                        }>{"\u00A3"}0.49</Text>
                    </View>
                    <View style={
                        {
                            marginTop: 15,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }
                    }>
                        <Text style={
                            {
                                fontSize: 16,
                                color: "#8a8a8a"
                            }
                        }>Taxes & Other Fees</Text>
                        <Text style={
                            {
                                marginRight: 15,
                                fontSize: 15,
                                color: "#8a8a8a"
                            }
                        }>{"\u00A3"}3.33</Text>
                    </View>
                    <View style={
                        {
                            marginTop: 15,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }
                    }>
                        <Text style={
                            {
                                fontSize: 17,
                                fontWeight: "500",
                                color: "black"
                            }
                        }>Total</Text>
                        <Text style={
                            {
                                marginRight: 15,
                                fontSize: 16,
                                fontWeight: "500"
                            }
                        }>{"\u00A3"}{(Number(subTotal) + 0.49 + 3.33 + extradeliveryFee + dessertPrice).toFixed(2)}</Text>
                    </View>
                </View>
                <View style={
                    {
                        marginLeft: 15,
                        marginTop: 35,
                        marginBottom: 5,
                        flexDirection: "row",
                        alignItems: "center"
                    }
                }>
                    <Image source={require("../../assets/images/creditcard.png")} style={
                        {
                            width: 35,
                            height: 35,
                            resizeMode: "contain"
                        }
                    } />
                    <View style={
                        {
                            marginLeft: "auto",
                            marginRight: 15
                        }
                    }>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
                    </View>
                </View>
                <View style={
                    {
                        marginTop: 15,
                        borderBottomColor: "#e2e2e2",
                        borderBottomWidth: 1
                    }
                } />
                <View style={
                    {
                        marginLeft: 15,
                        marginTop: 15,
                        maxWidth: 350
                    }
                }>
                    <Text style={
                        {
                            fontSize: 12,
                            lineHeight: 18,
                            color: "grey"
                        }
                    }>If you're not around when the courier arrives, they'll leave your order at the door. By placing your order, you agree to take full responsibility for it once it's delivered. Orders containing alcohol or other restricted items may not be eligible for leave at door and will be returned to the shop if you are not available.</Text>
                </View>
                <Pressable style={
                    {
                        width: "92%",
                        height: 55,
                        marginBottom: 15,
                        marginTop: 20,
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "black",
                        borderRadius: 10
                    }
                } onPress={() => navigation.navigate("OrderPlaced", {
                    item: item,
                    getTotal: (Number(subTotal) + 0.49 + 3.33 + extradeliveryFee + dessertPrice).toFixed(2),
                    dessertPrice: dessertPrice
                })}>
                    <Text style={
                        {
                            fontSize: 18,
                            fontWeight: "500",
                            color: "white"
                        }
                    }>Next</Text>
                </Pressable>
            </ScrollView>
        </>
    );
}

export default CheckoutScreen;

const styles = StyleSheet.create({
    fasterdeliveryContainer: {
        padding: 10,
        marginTop: 18,
        marginRight: 15,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#e2e2e2",
        borderRadius: 10,
        borderWidth: 2
    },
    standarddeliveryContainer: {
        padding: 10,
        marginTop: 8,
        marginRight: 15,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#111",
        borderRadius: 10,
        borderWidth: 2
    }
});