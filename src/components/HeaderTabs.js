import { View } from "react-native";
import React from "react";
import HeaderButton from "./HeaderButton";

export default function HeaderTabs(props) {
    return (
        <View style={
            {
                flexDirection: "row",
                alignSelf: "center",
                backgroundColor: "#F1F1F1",
                borderRadius: 50
            }
        }>
            <HeaderButton
                text="Delivery"
                btnColor="black"
                textColor="white"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
                iconname="bike-fast"
            />
            <HeaderButton
                text="Pickup"
                btnColor="white"
                textColor="black"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
                iconname="run-fast"
            />
        </View>
    );
}