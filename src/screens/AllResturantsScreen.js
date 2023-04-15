import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import AllResturantsDetails from "../components/AllResturantsDetails";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const AllResturantsScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={
                {
                    padding: 19,
                    marginTop: 35,
                    marginBottom: 7,
                    flexDirection: "row",
                    alignItems: "center",
                    borderBottomColor: "#eee",
                    borderBottomWidth: 1
                }
            }>
                <Pressable style={
                    {
                        right: 6
                    }
                } onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={25} />
                </Pressable>
                <Text style={
                    {
                        marginLeft: 10,
                        fontSize: 17,
                        fontWeight: "500"
                    }
                }>All Stores</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={
                {
                    marginLeft: 12
                }
            }>
                <AllResturantsDetails cities="Fresno" discount={false} />
                <AllResturantsDetails cities="New York" discount={false} />
                <AllResturantsDetails cities="Omaha" discount={false} />
                <AllResturantsDetails cities="Atlanta" discount={false} />
                <AllResturantsDetails cities="Raleigh" discount={false} />
                <AllResturantsDetails cities="Colorado Springs" discount={false} closed={true} />
            </ScrollView>
        </>
    );
}

export default AllResturantsScreen;