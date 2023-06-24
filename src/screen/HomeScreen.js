import { View, StyleSheet, ScrollView, Button,TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import FootballScoredCard from "../components/FootballScoredCard";
import UseApi from "../ws/UseApi";
import { useState,useEffect } from "react";
import LoaderApi from "../components/LoaderApi";
import {path_url,entity} from '../ws/Services.json';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const HomeScreen = ({navigation})=>{
  const [text, onChangeText] = useState('');
  const [data,setData] = useState([]);
  const [loader,SetLoader] = useState(false);
  const [pages,setPages] = useState(1);
  navigation = useNavigation();
  useEffect(() => {
    SetLoader(false);
    const fetchData = async () => {
      try {
        const apiUrl = `${path_url.base}${entity.matches.url}`;
        const response = await UseApi(apiUrl,entity.matches.method,{page:pages,limit:10});
        setData(response.results);
        SetLoader(true);
      }catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [pages]);
  const navigationStack=(id)=>{
    navigation.navigate('Match',{matchId:id});
  }

  if(loader === false){
    return <LoaderApi/>
  }

  return (
    <SafeAreaView style={{paddingTop:0}}>
      <View style={styles.content_search}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <View>
          <TouchableOpacity onPress={()=>{}}>
            <Icon name="search" size={27} color="#000" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          {
            data.map((item)=><FootballScoredCard key={item._id} competition={item.competition} homeTeam={item.team_local} awayTeam={item.team_visit} season={item.season} navigation={()=>{navigationStack(item._id)}} />)
          }
        </View>
      </ScrollView>
      <View style={styles.paginationButtonContainer}>
        <Button
          color="#000000"
          titleStyle={styles.buttonTitle} 
          title="Cargar más"
          onPress={()=>{ setPages(pages+1) }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    paginationButtonContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom:20
    },
    buttonTitle: {
      color: '#ffffff',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width:290
    },
    content_search:{
      backgroundColor:'white',
      flexDirection:'row'
      // display:'flex',
      // justifyContent:'space-around'
    },
    icon: {
      marginBottom: 5,
      marginTop:15
    }
});

export default HomeScreen;