import React from "react";
import { View, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LocationRow from "../components/LocationRow";

export default function SearchBar({ cityHandler, backgroundColor, marginTop, marginRight, left, width, alignSelf, height, placeHolder }) {
    return (
        <View style={
            {
                flexDirection: "row",
                marginTop: marginTop
            }
        }>
            <GooglePlacesAutocomplete
                onPress={(data, details = null) => {
                    const city = data.description.split(",")[0];
                    cityHandler(city);
                }}
                placeholder={placeHolder}
                enablePoweredByContainer={false}
                renderRow={(data) =>
                    <LocationRow data={data} />
                }
                styles={
                    {
                        textInput: {
                            marginTop: 7,
                            fontSize: 16,
                            fontWeight: "450",
                            backgroundColor: backgroundColor,
                            borderRadius: 20
                        },
                        textInputContainer: {
                            marginRight: marginRight,
                            left: left,
                            width: width,
                            height: height,
                            flexDirection: "row",
                            alignItems: "center",
                            alignSelf: alignSelf,
                            borderRadius: 50,
                            backgroundColor: backgroundColor
                        }
                    }
                }
                renderLeftButton={() => (
                    <View style={
                        {
                            marginLeft: 15,
                            marginRight: 5
                        }
                    }>
                        <FontAwesome5 name="search" size={22} />
                    </View>
                )
                }
            />
        </View>
    );
}
const Icon = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5
                name={props.icon}
                size={20}
                style={
                    {
                        top: 18,
                        right: 45
                    }
                } />
        </View>
    </TouchableOpacity>
);