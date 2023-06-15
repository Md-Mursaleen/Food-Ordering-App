import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const YELP_API_KEY = "";

export default function ResturantDetails({ cities, discount, closed }) {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState("Delivery");
    const [resturantData, setResturantData] = useState([]);

    const getResturantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${cities}`;
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        }
        return fetch(yelpUrl, apiOptions)
            .then((res) =>
                res.json()
            )
            .then((json) => setResturantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));
    };
    useEffect(() => {
        getResturantsFromYelp();
    }, [cities, activeTab]);
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ".." : string;
    }
    return (
        <>
            {resturantData.map((resturant, index) => (
                <TouchableOpacity activeOpacity={1}
                    onPress={() => !closed && navigation.navigate("Resturant", {
                        name: resturant.name,
                        image: resturant.image_url,
                        price: resturant.price,
                        reviews: resturant.review_count,
                        rating: resturant.rating,
                        categories: resturant.categories,
                        address: resturant.location.address1,
                        city: resturant.location.city,
                        discount: discount,
                        latitude: resturant.coordinates.latitude,
                        longitude: resturant.coordinates.longitude
                    })}
                    key={index} style={{ marginBottom: 5 }}>
                    <View
                        style={
                            {
                                padding: 15,
                                backgroundColor: "white"
                            }
                        }>
                        <ResturantImage image={resturant.image_url} discount={discount} closed={closed} />
                        <ResturantInfo name={resturant.name} rating={resturant.rating} address={resturant.location.address1} truncate={truncate} />
                    </View>
                </TouchableOpacity>
            ))
            }
        </>
    );
}
const ResturantImage = (props) => (
    <>
        <Image
            source={
                {
                    uri: props.image
                }
            }
            style={
                [styles.imageContainer, props.closed && { backgroundColor: "#111", opacity: 0.5 }]
            }
        />
        {props.discount && (
            <View style={
                {
                    position: "absolute",
                    padding: 5,
                    top: 25,
                    left: 15,
                    width: 170,
                    backgroundColor: "#3CB043",
                    borderTopRightRadius: 50,
                    borderBottomRightRadius: 50
                }
            }>
                <Text style={
                    {
                        marginLeft: 12,
                        fontSize: 15,
                        fontWeight: "500",
                        color: "white"
                    }
                }>
                    Spend {"\u00A3"}30, save {"\u00A3"}5
                </Text>
            </View>
        )}
        {props.closed && (
            <View style={
                {
                    position: "absolute",
                    alignSelf: "center"
                }
            }>
                <Text style={
                    {
                        marginTop: 90,
                        fontSize: 15,
                        fontWeight: "500",
                        color: "white"
                    }
                }>
                    Currently unavailable
                </Text>
            </View>
        )}
        <TouchableOpacity style={
            {
                position: "absolute",
                top: 20,
                right: 20,
                fontWeight: "bold"
            }
        } >
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
);

const ResturantInfo = (props) => (
    <View style={
        {
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }
    }>
        <View>
            <View style={
                {
                    flexDirection: "row",
                    alignItems: "center"
                }
            }>
                <Text style={
                    {
                        fontSize: 16,
                        fontWeight: "500"
                    }
                }>{props.truncate(props.name, 25)}</Text>
                <Text
                    style={
                        {
                            marginHorizontal: 5,
                            fontSize: 16,
                            fontWeight: "500"
                        }
                    }>({props.truncate(props.address, 15)})</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text
                    style={{ color: "grey" }}>{"\u00A3"}0.49 Delivery Fee • </Text>
                <Text style={{ color: "grey" }}>30-45 • min</Text>
            </View>
        </View>
        <View style={
            {
                height: 30,
                width: 30,
                backgroundColor: "#eee",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center"
            }
        }>
            <Text
            >{props.rating}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: 180
    }
});
