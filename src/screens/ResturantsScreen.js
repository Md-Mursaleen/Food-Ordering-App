import React, { useEffect, useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import Categories from "../components/Categories";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import ResturantDetails from "../components/ResturantDetails";
import BottomTabs from "../components/BottomTabs";
import ResturantDetail from "../components/ResturantDetail";
import HomeFooter from "../components/HomeFooter";

const items = [
    {
        image: require("../../assets/images/mexican.png"),
        text: "Mexican",
        title: "mexican"
    },
    {
        image: require("../../assets/images/fastfood.png"),
        text: "Fast food",
        title: "american"
    },
    {
        image: require("../../assets/images/healthy.png"),
        text: "Healthy",
        title: "healthy"
    },
    {
        image: require("../../assets/images/pizza.png"),
        text: "Pizza",
        title: "pizza"
    },
    {
        image: require("../../assets/categoriesimages/sandwich.png"),
        text: "Sandwich",
        title: "sandwich"
    },
    {
        image: require("../../assets/images/burger.png"),
        text: "Burger",
        title: "burger"
    },
    {
        image: require("../../assets/categoriesimages/sushi.png"),
        text: "Sushi",
        title: "sushi"
    },
    {
        image: require("../../assets/categoriesimages/roll.png"),
        text: "Rolls",
        title: "roll"
    },
    {
        image: require("../../assets/categoriesimages/juice.png"),
        text: "Juices",
        title: "juice"
    },
    {
        image: require("../../assets/categoriesimages/soup.png"),
        text: "Soup",
        title: "soup"
    }
];

const YELP_API_KEY = "9MpCpziTpWpNEpw1mQszdVERxaJ4qNwWrZXhh3SRtEISnskcjFx1o3fGjn7xDa5ZQleKRaDfTvoULKy0Wen6THwhgSrByNwJAvZspAxyrg-WvH5Kj5_jy8rQZ_erY3Yx";

function ResturantsScreen() {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState("Delivery");
    const [cities1, setCities1] = useState("Honolulu");
    const [cities2, setCities2] = useState("Fresno");
    const [resturantData1, setResturantData1] = useState([]);
    const [resturantData2, setResturantData2] = useState([]);

    const getResturantsFromYelp = (setResturantData, cities) => {
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
        getResturantsFromYelp(setResturantData1, cities1);
    }, [cities1, activeTab]);
    useEffect(() => {
        getResturantsFromYelp(setResturantData2, cities2);
    }, [cities2, activeTab]);
    return (
        <>
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
                    <Feather name="arrow-left" size={25} />
                </Pressable>
                <Text style={
                    {
                        marginLeft: 15,
                        marginTop: 5,
                        marginBottom: 5,
                        fontSize: 30,
                        fontWeight: "600"
                    }
                }>Restaurants</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={items} renderItem={({ item }) => <Categories items={item} key={item.id} marginTop={5} width={45} height={45} />} />
                </View>
                <View style={
                    {
                        marginTop: 15,
                        borderTopColor: "#F6F6F6",
                        borderTopWidth: 8
                    }
                }>
                    <ResturantDetails cities="Charleston" discount={false} />
                </View>
                <View style={
                    {
                        borderTopColor: "#F4F4F4",
                        borderTopWidth: 8
                    }
                }>
                    <View style={
                        {
                            flexDirection: "row"
                        }
                    }>
                        <Text style={
                            {
                                marginLeft: 15,
                                marginTop: 15,
                                fontSize: 24,
                                fontWeight: "700"
                            }
                        }>Everyday savings</Text>
                        <Text style={
                            {
                                marginLeft: "auto",
                                marginRight: 15,
                                marginTop: 25
                            }
                        }>See all</Text>
                    </View>
                    <View>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={resturantData1} renderItem={({ item }) => <ResturantDetail resturantData={item} isList="true" discount={true} marginTop={10} left={0} top={8} />} />
                    </View>
                </View>
                <View style={
                    {
                        marginBottom: 20,
                        marginTop: 15
                    }
                }>
                    <View style={
                        {
                            flexDirection: "row"
                        }
                    }>
                        <Text style={
                            {
                                marginLeft: 15,
                                marginTop: 15,
                                fontSize: 24,
                                fontWeight: "700"
                            }
                        }>Today's offers</Text>
                        <Text style={
                            {
                                marginLeft: "auto",
                                marginRight: 15,
                                marginTop: 25,
                                fontSize: 14,
                                fontWeight: "500"
                            }
                        }>See all</Text>
                    </View>
                    <View>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={resturantData2} renderItem={({ item }) => <ResturantDetail resturantData={item} isList="true" discount={false} marginTop={10} left={0} top={8} />} />
                    </View>
                </View>
                <View style={
                    {
                        borderTopColor: "#F4F4F4",
                        borderTopWidth: 8
                    }
                }>
                    <ResturantDetails cities="Austin" discount={false} />
                </View>
                <View>
                    <ResturantDetails cities="Dallas" discount={true} />
                </View>
                <View>
                    <ResturantDetails cities="Raleigh" discount={false} />
                </View>
                <View>
                    <HomeFooter />
                </View>
            </ScrollView>
            <View style={{ marginTop: "auto", backgroundColor: "white", borderTopColor: "#eee", borderTopWidth: 1 }}>
                <BottomTabs />
            </View>
        </>
    );
}

export default ResturantsScreen;