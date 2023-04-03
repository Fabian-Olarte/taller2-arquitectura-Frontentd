import React from "react"
import { Image, Text, View } from "react-native";
import { Styles } from "./CardStyles";


export default function CardComponent({data}){

    return(
        <View style={Styles.containerLayout}>

            <Image 
                source={{uri: data.item.image}} 
                style={Styles.image}
            />

            <View style={Styles.infoContainer}> 
                <View>
                    <Text numberOfLines={1} style={Styles.name}>{data.item.name}</Text>
                    <Text numberOfLines={1} style={Styles.status}>Status: {data.item.status}</Text>
                </View>

                <View>
                    <Text numberOfLines={1} style={Styles.seen}>Location: {data.item.location}</Text>
                </View>
            </View>

        </View>
    )

}