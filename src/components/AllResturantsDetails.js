import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const YELP_API_KEY = "";

export default function AllResturantsDetails({ cities, discount, closed }) {
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
                    key={index} style={
                        {
                            marginBottom: 5
                        }
                    }>
                    <View
                        style={
                            {
                                marginLeft: 3,
                                flexDirection: "row",
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
                    top: 8,
                    width: 80,
                    backgroundColor: "#3CB043",
                    borderTopRightRadius: 50,
                    borderBottomRightRadius: 50
                }
            }>
                <Text style={
                    {
                        fontSize: 8,
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
                        marginLeft: 22,
                        marginBottom: 15,
                        fontSize: 15,
                        fontWeight: "500",
                        color: "white"
                    }
                }>
                    Closed
                </Text>
            </View>
        )}
        <TouchableOpacity style={
            {
                position: "absolute",
                top: 5,
                left: 65,
                fontWeight: "bold"
            }
        } >
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
);

const ResturantInfo = (props) => (
    <>
        <View style={
            {
                marginTop: 10,
                marginBottom: 30,
                marginLeft: 15,
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
                </View>
                <View>
                    <Text
                        style={
                            {
                                color: "grey"
                            }
                        }>{"\u00A3"}0.49 Delivery Fee</Text>
                    <Text style={
                        {
                            color: "grey"
                        }
                    }>30-45 min</Text>
                </View>
            </View>
        </View>
        <View style={
            {
                marginLeft: "auto",
                marginRight: 15,
                marginTop: 15,
                height: 30,
                width: 30,
                backgroundColor: "#eee",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center"
            }
        }>
            <Text style={
                {
                    fontSize: 13
                }
            }>{props.rating}</Text>
        </View>
    </>
);

const styles = StyleSheet.create({
    imageContainer: {
        width: 95,
        height: 85
    }
});
