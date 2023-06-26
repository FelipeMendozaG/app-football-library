import { SafeAreaView, FlatList} from "react-native";
import {path_url,entity} from '../ws/Services.json';
import { useEffect, useState } from "react";
import UseApi from "../ws/UseApi";
import LoaderApi from "../components/LoaderApi";
import { StyleSheet } from "react-native";
import CardSeason from "../components/CardSeason";

const SeasonScreen = ({})=>{
    const [statusApi,SetStatusApi] = useState(false);
    const [data,setData] = useState([]);

    const GetDataSeason = async()=>{
        try {
            SetStatusApi(true);
            const apiUrl = `${path_url.base}${entity.season.url}`;
            const response = await UseApi(apiUrl,entity.season.method);
            setData(response);
            SetStatusApi(false);
        }catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        GetDataSeason();
    },[]);

    if(statusApi === true ){
        return <LoaderApi/>
    }

    return (
        <SafeAreaView style={{flexDirection:'column'}}>
            <FlatList 
                data={data}
                numColumns={2}
                renderItem={({item})=><CardSeason name={item.name} /> }
                keyExtractor={(item) => item._id}
                contentContainerStyle={styles.container}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingLeft:5,
        paddingTop:10,
        paddingBottom:10
    }
});

export default SeasonScreen;