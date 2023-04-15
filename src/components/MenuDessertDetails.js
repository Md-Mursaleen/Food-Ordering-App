import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const desserts = [
    {
        title: "Cheesecake",
        price: "3.99",
        selectedText: "Popular",
        show: true
    },
    {
        title: "Chocolate Icebox",
        price: "4.49",
        show: true
    },
    {
        title: "Jello",
        price: "0.99",
        show: true
    },
    {
        title: "Lime Congeal",
        price: "2.99",
        show: false
    }
];

const MenuDessertDetails = ({ dessertPrice, setDessertPrice }) => {
    const [checkboxState, setCheckboxState] = useState(false);
    return (
        <View style={
            {
                marginLeft: 15
            }
        }>
            <Text style={
                {
                    marginTop: 15,
                    marginBottom: 8,
                    fontSize: 20,
                    fontWeight: "500"
                }
            }>Dessert</Text>
            {desserts.map((dessert, index) => (
                <View
                    key={index} style={
                        [styles.container, dessert.show && { borderBottomColor: "#eee", borderBottomWidth: 1 }]
                    }>
                    <View style={
                        {
                            marginBottom: 10,
                        }
                    }>
                        <Text style={
                            {
                                fontSize: 16,
                                fontWeight: "500"
                            }
                        }>{dessert.title}</Text>
                        <Text style={
                            {
                                marginTop: 8
                            }
                        }>{"\u00A3"}{dessert.price}</Text>
                        {dessert.selectedText && (
                            <Text style={
                                {
                                    marginTop: 5,
                                    fontSize: 14,
                                    fontWeight: "500",
                                    color: "green"
                                }
                            }>{dessert.selectedText}</Text>
                        )}
                    </View>
                    <View style={
                        {
                            marginLeft: "auto",
                            marginBottom: 5
                        }
                    }>
                        <BouncyCheckbox fillColor="black" size={18} innerIconStyle={
                            {
                                borderWidth: 2,
                                borderRadius: 1.5
                            }
                        } iconStyle={
                            {
                                borderRadius: 1.5
                            }
                        } onPress={() => { setDessertPrice(dessert.price) }} />
                    </View>
                </View>
            ))}
        </View>
    );
}

export default MenuDessertDetails;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center"
    }
});