import { View, StyleSheet, ScrollView, Button } from "react-native";
import FootballScoredCard from "../components/FootballScoredCard";
import UseApi from "../ws/UseApi";
import { useState,useEffect } from "react";

const HomeScreen = ({navigation})=>{
  const [data,setData] = useState([])
  useEffect(() => {
        const fetchData = async () => {
          try {
            const apiUrl = 'https://api-footballia-production.up.railway.app/api/matches';
            const result = await UseApi(apiUrl,'get');
            setData(result);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
  }, []);
  const navigationStack=(id)=>{
    console.log(id);
    navigation.navigate('Match')
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {
          data.map((item,index)=><FootballScoredCard key={index} homeTeam="FC Barcelona" awayTeam="Real Madrid" homeScore={3} awayScore={1} navigation={()=>{navigationStack(item._id)}} />)
        }
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
});

export default HomeScreen;