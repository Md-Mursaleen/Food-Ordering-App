import React from "react";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import BottomTabs from "../components/BottomTabs";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import CategoriesResturants from "../components/CategoriesResturants";

const items = {
    breakfast: require("../../assets/categoriesiamges/breakfast.png"),
    coffee: require("../../assets/categoriesiamges/coffee.png"),
    soup: require("../../assets/categoriesiamges/soup.png"),
    mexican: require("../../assets/categoriesiamges/taco.png"),
    pizza: require("../../assets/categoriesiamges/pizza.png"),
    chinese: require("../../assets/categoriesiamges/chinese.png"),
    sandwich: require("../../assets/categoriesiamges/sandwich.png"),
    bakery: require("../../assets/categoriesiamges/bakery.png"),
    vegan: require("../../assets/categoriesiamges/vegan.png"),
    wings: require("../../assets/categoriesiamges/wings.png"),
    bbq: require("../../assets/categoriesiamges/bbq.png"),
    doughnut: require("../../assets/categoriesiamges/doughnut.png"),
    sushi: require("../../assets/categoriesiamges/sushi.png"),
    indian: require("../../assets/categoriesiamges/indian.png"),
    burger: require("../../assets/categoriesiamges/burger.png"),
    asian: require("../../assets/categoriesiamges/asian.png"),
    thai: require("../../assets/categoriesiamges/thai.png"),
    pasta: require("../../assets/categoriesiamges/pasta.png"),
    seafood: require("../../assets/categoriesiamges/seafood.png"),
    juice: require("../../assets/categoriesiamges/juice.png"),
    chicken: require("../../assets/categoriesiamges/chicken.png"),
    comfortfood: require("../../assets/categoriesiamges/comfortfood.png"),
    bubbletea: require("../../assets/categoriesiamges/bubbletea.png"),
    ramen: require("../../assets/categoriesiamges/ramen.png"),
    retail: require("../../assets/categoriesiamges/retail.png"),
    italian: require("../../assets/categoriesiamges/italian.png"),
    dessert: require("../../assets/categoriesiamges/dessert.png"),
    grocery: require("../../assets/categoriesiamges/grocery.png"),
    japanese: require("../../assets/categoriesiamges/japanese.png"),
    american: require("../../assets/categoriesiamges/american.png"),
    flower: require("../../assets/categoriesiamges/flower.png"),
    vietnamese: require("../../assets/categoriesiamges/vietnamese.png"),
    salad: require("../../assets/categoriesiamges/salad.png"),
    southernfood: require("../../assets/categoriesiamges/southernfood.png"),
    baby: require("../../assets/categoriesiamges/baby.png"),
    soulfood: require("../../assets/categoriesiamges/soulfood.png"),
    fish: require("../../assets/categoriesiamges/fish.png"),
    roll: require("../../assets/categoriesiamges/roll.png"),
    african: require("../../assets/categoriesiamges/african.png"),
    vegetarian: require("../../assets/categoriesiamges/vegetarian.png"),
    glutenfree: require("../../assets/categoriesiamges/glutenfree.png"),
    halal: require("../../assets/categoriesiamges/chicken.png"),
    cupcake: require("../../assets/categoriesiamges/cupcake.png"),
    everydayessential: require("../../assets/categoriesiamges/everydayessential.png"),
    icecream: require("../../assets/categoriesiamges/icecream.png"),
    healthy: require("../../assets/categoriesiamges/healthy.png"),
    mediterranean: require("../../assets/categoriesiamges/mediterranean.png"),
    korean: require("../../assets/categoriesiamges/korean.png"),
    pharmacy: require("../../assets/categoriesiamges/pharmacy.png"),
    alcohol: require("../../assets/categoriesiamges/alcohol.png"),
    burritos: require("../../assets/categoriesiamges/burritos.png"),
    steak: require("../../assets/categoriesiamges/steak.png"),
    middleeastern: require("../../assets/categoriesiamges/middleeastern.png"),
    barfood: require("../../assets/categoriesiamges/wings.png"),
    streetfood: require("../../assets/categoriesiamges/streetfood.png"),
    pastry: require("../../assets/categoriesiamges/pastry.png"),
    frenchfries: require("../../assets/categoriesiamges/frenchfries.png"),
    biryani: require("../../assets/categoriesiamges/biryani.png"),
    falafel: require("../../assets/categoriesiamges/falafel.png"),
    cocktail: require("../../assets/categoriesiamges/cocktail.png"),
    southasian: require("../../assets/categoriesiamges/southasian.png"),
    turkish: require("../../assets/categoriesiamges/turkish.png")
};

function SearchItemsScreen({ route }) {
    const navigation = useNavigation();
    const { name, title } = route.params;
    return (
        <>
            <View>
                <View style={
                    {
                        height: 165,
                        backgroundColor: "#fff2f4"
                    }
                }>
                    <Pressable style={
                        {
                            position: "absolute",
                            marginTop: 50,
                            marginLeft: 15
                        }
                    }
                        onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={25} />
                    </Pressable>
                    <Text style={
                        {
                            position: "absolute",
                            marginTop: 100,
                            marginLeft: 15,
                            fontSize: 28,
                            fontWeight: "600"
                        }
                    }>{name}</Text>
                    <View style={
                        {
                            marginTop: "auto",
                            marginLeft: "auto",
                            marginBottom: 15,
                            marginRight: 10,
                        }
                    }>
                        <Image source={items[title]} style={
                            {
                                width: 70,
                                height: 70,
                                resizeMode: "contain"
                            }
                        } />
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={
                {
                    marginTop: 10,
                    marginLeft: 12
                }
            }>
                <Text style={
                    {
                        marginTop: 5,
                        marginBottom: 25,
                        fontSize: 20,
                        fontWeight: "600"
                    }
                }>100+ Results</Text>
                <CategoriesResturants cities="Memphis" discount={false} />
                <CategoriesResturants cities="Dallas" discount={false} />
                <CategoriesResturants cities="Omaha" discount={false} />
                <CategoriesResturants cities="Miami" discount={false} />
                <CategoriesResturants cities="Raleigh" discount={false} />
                <CategoriesResturants cities="Mesa" discount={false} closed={true} />
            </ScrollView>
            <View style={{ marginTop: "auto", backgroundColor: "white", borderTopColor: "#eee", borderTopWidth: 1 }}>
                <BottomTabs />
            </View>
        </>
    );
}

export default SearchItemsScreen;