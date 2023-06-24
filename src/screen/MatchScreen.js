import { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useRoute } from '@react-navigation/native';
import {path_url,entity} from '../ws/Services.json';
import UseApi from '../ws/UseApi';
import LoaderApi from '../components/LoaderApi';
const MatchScreen = ({navigation})=>{
    const route = useRoute();
    const video = useRef(null);
    const [data, setData] = useState({});
    const [status, setStatus] = useState({});
    const [statusfetch,setStatusFetch] = useState(false);
    const { matchId } = route.params;
    const Orientation=async()=>{
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    }
    
    const GetMatchDetail=async()=>{
        setStatusFetch(false);
        const url = `${path_url.base}${entity.get_matches_and_detail.url.replace(':param',matchId)}`;
        const response = await UseApi(url);
        setData(response);
        setStatusFetch(true);
    }

    useEffect(()=>{
        GetMatchDetail();
    },[]);

    if(statusfetch === false){
        return <LoaderApi/>
    }

    Orientation();
    return (
        <ScrollView>
            <View>
                <SafeAreaView style={styles.header_page}>
                    <Text style={styles.title_header}>{data.matches.title_match}</Text>
                    <View style={styles.information_media}>
                        <View>
                            <Text style={styles.text_information}>Fase: {data.matches.stage}</Text> 
                        </View>
                    </View>
                </SafeAreaView>
                {
                    data.match_details.map( (item,index)=> <Video key={index} ref={video} style={styles.video} source={{uri: `${item.url_video}`}} useNativeControls resizeMode={ResizeMode.CONTAIN} isLooping onPlaybackStatusUpdate={status => setStatus(() => status)}/>)
                }
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    video: {
      alignSelf: 'center',
      width:350,
      height: 200,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title_header:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    },
    header_page:{
        marginTop:20,
        marginBottom:20,
    },
    information_media:{
        paddingLeft:10,
        paddingRight:10
    },
    text_information:{
        fontSize:15,
        textAlign:'center'
    }
});

export default MatchScreen;