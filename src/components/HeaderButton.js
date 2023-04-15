import { TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function HeaderButton(props) {
    const navigation = useNavigation();
    const onPress = () => {
        if (props.text === "Delivery") {
            navigation.navigate("Home");
        }
        else if (props.text === "Pickup") {
            navigation.navigate("Pickup");
        }
    };
    return (
        <TouchableOpacity style={
            {
                backgroundColor: props.activeTab === props.text ? "black" : "#F1F1F1",
                width: 50,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50
            }
        }
            onPress={onPress}>
            {props.activeTab === props.text ? (
                <MaterialCommunityIcons name={props.iconname} size={18} color={props.activeTab === props.text ? "white" : "black"} />
            ) : (
                <MaterialCommunityIcons name={props.iconname} size={20} color={props.activeTab === props.text ? "white" : "black"} />
            )}
        </TouchableOpacity>
    );
}