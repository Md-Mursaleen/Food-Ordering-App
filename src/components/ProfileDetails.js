import React from "react";
import { Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import AntDesign from "react-native-vector-icons/AntDesign";

function ProfileDetails() {
    return (
        <View>
            <View style={
                {
                    marginLeft: 20,
                    marginTop: 20,
                    flexDirection: "row",
                    alignItems: "center"
                }
            }>
                <Ionicons name="pricetag-sharp" size={18} />
                <Text style={
                    {
                        marginLeft: 20,
                        fontSize: 16,
                        fontWeight: "500"
                    }
                }>Promotions</Text>
            </View>
            <View style={
                {
                    marginLeft: 20,
                    marginTop: 35,
                    flexDirection: "row",
                    alignItems: "center"
                }
            }>
                <Ionicons name="md-help-buoy-sharp" size={20} />
                <Text style={
                    {
                        marginLeft: 20,
                        fontSize: 16,
                        fontWeight: "500"
                    }
                }>Help</Text>
            </View>
            <View style={
                {
                    marginLeft: 20,
                    marginTop: 35,
                    flexDirection: "row",
                    alignItems: "center"
                }
            }>
                <MaterialIcons name="stars" size={20} />
                <Text style={
                    {
                        marginLeft: 20,
                        fontSize: 16,
                        fontWeight: "500"
                    }
                }>Restaurant Rewards</Text>
            </View>
            <View style={
                {
                    marginLeft: 20,
                    marginTop: 35,
                    flexDirection: "row",
                    alignItems: "center"
                }
            }>
                <FontAwesome5 name="users" size={18} />
                <View>
                    <Text style={
                        {
                            marginLeft: 20,
                            fontSize: 16,
                            fontWeight: "500"
                        }
                    }>Family</Text>
                    <Text style={
                        {
                            marginLeft: 20,
                            fontSize: 13,
                            color: "grey"
                        }
                    }>Manage a family profile</Text>
                </View>
            </View>
            <View style={
                {
                    marginLeft: 20,
                    marginTop: 35,
                    flexDirection: "row",
                    alignItems: "center"
                }
            }>
                <Foundation name="shopping-bag" size={20} />
                <View>
                    <Text style={
                        {
                            marginLeft: 20,
                            fontSize: 16,
                            fontWeight: "500"
                        }
                    }>Business Preferences</Text>
                    <Text style={
                        {
                            marginLeft: 20,
                            fontSize: 13,
                            color: "green"
                        }
                    }>Make work meals quicker and easier</Text>
                </View>
            </View>
            <View style={
                {
                    marginLeft: 20,
                    marginTop: 35,
                    flexDirection: "row",
                    alignItems: "center"
                }
            }>
                <Ionicons name="md-gift-sharp" size={20} />
                <Text style={
                    {
                        marginLeft: 20,
                        fontSize: 16,
                        fontWeight: "500"
                    }
                }>Send a gift</Text>
            </View>
            <View style={
                {
                    marginLeft: 20,
                    marginTop: 35,
                    flexDirection: "row",
                    alignItems: "center"
                }
            }>
                <FontAwesome5 name="user-plus" size={18} />
                <View>
                    <Text style={
                        {
                            marginLeft: 20,
                            fontSize: 16,
                            fontWeight: "500"
                        }
                    }>Invite friends</Text>
                    <Text style={
                        {
                            marginLeft: 20,
                            fontSize: 13,
                            color: "grey"
                        }
                    }>Get ₹100 off your order</Text>
                </View>
            </View>
            <View style={
                {
                    marginLeft: 20,
                    marginTop: 35,
                    flexDirection: "row",
                    alignItems: "center"
                }
            }>
                <MaterialCommunityIcons name="eye-remove" size={22} />
                <Text style={
                    {
                        marginLeft: 20,
                        fontSize: 16,
                        fontWeight: "500"
                    }
                }>Privacy</Text>
            </View>
            <View style={
                {
                    marginLeft: 20,
                    marginTop: 35,
                    flexDirection: "row",
                    alignItems: "center"
                }
            }>
                <MaterialCommunityIcons name="shield-check" size={20} />
                <Text style={
                    {
                        marginLeft: 20,
                        fontSize: 16,
                        fontWeight: "500"
                    }
                }>COVID-19 Safety Center</Text>
            </View>
            <View style={
                {
                    marginLeft: 20,
                    marginTop: 35,
                    flexDirection: "row",
                    alignItems: "center"
                }
            }>
                <FontAwesome5 name="shopping-bag" size={18} />
                <Text style={
                    {
                        marginLeft: 20,
                        fontSize: 16,
                        fontWeight: "500"
                    }
                }>Earn by driving or delivering</Text>
            </View>
            <View style={
                {
                    marginLeft: 20,
                    marginTop: 35,
                    flexDirection: "row",
                    alignItems: "center"
                }
            }>
                <AntDesign name="exclamationcircle" size={18} />
                <Text style={
                    {
                        marginLeft: 20,
                        fontSize: 16,
                        fontWeight: "500"
                    }
                }>About</Text>
            </View>
            <Text style={
                {
                    marginLeft: 20,
                    marginBottom: 15,
                    marginTop: 30,
                    fontSize: 14,
                    color: "grey"
                }
            }>v6.150.10001</Text>
        </View>
    );
}

export default ProfileDetails;