import React, { useEffect, useState } from "react"
import { FlatList } from "react-native";
import { Text, View } from "react-native";
import CardComponent from "../../../components/card/CardComponent";
import { Styles } from "../../styles/ScreensStyles";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getDataApi } from "../../../services/ApiServices";

export default function AppScreen(){

    const insets = useSafeAreaInsets();
    const [apiData, setApiData] = useState(undefined)

    const dataApi = async () => {
        try{
            const result = await getDataApi();
            setApiData(result.data);
        }

        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        dataApi();
    },[])

    return(  
        <View style={[Styles.containerLayout, {paddingTop: insets.top}]}>

            <View>
                <Text style={Styles.title}>Rick & Morty</Text>
            </View>

            {apiData? 
                <FlatList 
                data={apiData}
                keyExtractor={(item, index) => {return index.toString()}}
                renderItem={(item) => <CardComponent data={item}/>}
                initialNumToRender={10}/> 

            : null}

        </View>
    )
}
