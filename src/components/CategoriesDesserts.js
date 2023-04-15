import { View, Text } from "react-native";
import React from "react";
import DessertResturants from "./DessertResturants";

const CategoriesDessert = ({ title }) => {
    return (
        <View style={
            {
                marginTop: 18,
                borderTopColor: "#F4F4F4",
                borderTopWidth: 8
            }
        }>
            <Text style={
                {
                    marginLeft: 15,
                    marginTop: 10,
                    fontSize: 24,
                    fontWeight: "700"
                }
            }>All stores</Text>
            <DessertResturants title={title} />
            <View style={
                {
                    marginBottom: 15,
                    marginTop: 12,
                    borderTopColor: "#F4F4F4",
                    borderTopWidth: 8
                }
            }>
                <Text style={
                    {
                        marginLeft: 16,
                        marginTop: 18,
                        maxWidth: 360,
                        fontSize: 15,
                        lineHeight: 22
                    }
                }>Uber is paid by merchants for marketing and promotion, which influences the personalised recommendations you see. Learn more or change settings</Text>
            </View>
        </View>
    );
}

export default CategoriesDessert;