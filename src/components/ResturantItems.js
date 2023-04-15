import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

const DEFAULT_IMAGE = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg";

function ResturantItems({ resturant }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Resturant", {
                id: resturant.id
            })}
            style={
                {
                    width: "100%",
                    marginVertical: 10
                }
            }>
            <Image source={{
                uri: resturant.image.startsWith("http") ? resturant.image : DEFAULT_IMAGE
            }} style={{
                marginBottom: 5,
                width: "100%",
                aspectRatio: 5 / 3
            }} />
            <View style={
                {
                    flexDirection: "row",
                    alignItems: "center"
                }
            }>
                <View>
                    <Text style={
                        {
                            marginVertical: 5,
                            fontSize: 16,
                            fontWeight: "600"
                        }
                    }>{resturant.name}</Text>
                    <Text style={
                        {
                            color: "grey"
                        }
                    } >{resturant.deliveryFee.toFixed(1)} • {resturant.minDeliveryTime}-{resturant.maxDeliveryTime} min</Text>
                </View>
                <View style={
                    {
                        width: 30,
                        height: 30,
                        marginLeft: "auto",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#eee",
                        borderRadius: 20
                    }
                }>
                    <Text>{resturant.rating.toFixed(1)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ResturantItems;