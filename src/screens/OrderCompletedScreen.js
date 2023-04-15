import { View, Text, StatusBar } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import OrderItems from "../components/OrderItems";

const OrderCompletedScreen = ({ route }) => {
    const { item, getTotal } = route.params;
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" hidden={false} translucent={true} />
            <View style={
                {
                    marginTop: 50
                }
            }>
                <LottieView source={require("../../assets/animations/check-mark.json")} style={
                    {
                        height: 100,
                        marginBottom: 40,
                        alignSelf: "center"
                    }
                }
                    autoPlay
                    speed={0.5}
                    loop={false} />
                <Text style={
                    {
                        marginLeft: 15,
                        fontSize: 22,
                        fontWeight: "500",
                        lineHeight: 28
                    }
                }>Your order at {item.resturantName} has been placed for {"\u00A3"}{(getTotal).toFixed(2)}</Text>
                <OrderItems item={item} />
                <LottieView source={require("../../assets/animations/cooking.json")} style={
                    {
                        marginTop: "auto",
                        height: 180,
                        alignSelf: "center"
                    }
                }
                    autoPlay
                    speed={0.5}
                    loop={true} />
            </View>
        </>
    );
}

export default OrderCompletedScreen;