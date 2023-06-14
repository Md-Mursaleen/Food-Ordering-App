import React from "react";
import { View, Text, Pressable } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";

const ProfileSettingScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={
            {
                marginTop: 50
            }
        }>
            <Pressable style={
                {
                    marginLeft: 15
                }
            }
                onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={23} />
            </Pressable>
            <Text style={
                {
                    marginLeft: 15,
                    fontSize: 38,
                    fontWeight: "400"
                }
            }>Settings</Text>
            <View style={
                {
                    width: 75,
                    height: 75,
                    marginTop: 20,
                    backgroundColor: "#eee",
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    borderRadius: 50
                }
            }>
                <Pressable style={
                    {
                        width: 65,
                        height: 65,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#F6F6F6",
                        borderRadius: 50
                    }
                }><Entypo name="user" size={30} color="#CDCDCD" /></Pressable>
            </View>
            <View style={
                {
                    marginTop: 10
                }
            }>
                <Text style={
                    {
                        fontSize: 18,
                        textAlign: "center"
                    }
                }>Md Mursaleen</Text>
                <Text style={
                    {
                        marginTop: 10,
                        fontSize: 14,
                        fontWeight: "500",
                        textAlign: "center",
                        color: "green"
                    }
                }>EDIT ACCOUNT</Text>
            </View>
            <View style={
                {
                    marginHorizontal: 15,
                    marginTop: 30,
                    borderTopColor: "#F4F4F4",
                    borderTopWidth: 1
                }
            }>
                <Text style={
                    {
                        marginTop: 20,
                        fontSize: 20
                    }
                }>Saved Places</Text>
                <View style={
                    {
                        marginTop: 20
                    }
                }>
                    <View style={
                        {
                            flexDirection: "row",
                            alignItems: "center"
                        }
                    }>
                        <View>
                            <Octicons name="home" size={21} />
                        </View>
                        <View style={
                            {
                                marginLeft: 20
                            }
                        }>
                            <Text style={
                                {
                                    fontSize: 15
                                }
                            }>Home</Text>
                            <Text style={
                                {
                                    marginTop: 15,
                                    fontSize: 13,
                                    color: "grey"
                                }
                            }>Add Home</Text>
                        </View>
                    </View>
                    <View style={
                        {
                            marginTop: 30,
                            flexDirection: "row",
                            alignItems: "center"
                        }
                    }>
                        <View>
                            <MaterialIcons name="work-outline" size={23} />
                        </View>
                        <View style={
                            {
                                marginLeft: 20
                            }
                        }>
                            <Text style={
                                {
                                    fontSize: 15
                                }
                            }>Work</Text>
                            <Text style={
                                {
                                    marginTop: 15,
                                    fontSize: 13,
                                    color: "grey"
                                }
                            }>Add Work</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={
                {
                    marginTop: 18,
                    borderTopColor: "#EAEAEA",
                    borderTopWidth: 4
                }
            }>
                <View style={
                    {
                        marginTop: 20,
                        marginLeft: 15
                    }
                }>
                    <Text style={
                        {
                            fontSize: 20
                        }
                    }>Other Options</Text>
                    <Pressable
                        onPress={() => Auth.signOut()}>
                        <Text style={
                            {
                                marginTop: 25,
                                fontSize: 18,
                                color: "green"
                            }
                        }>Sign Out</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default ProfileSettingScreen;