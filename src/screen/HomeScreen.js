import { View, Text, Button, StyleSheet } from "react-native";
import FootballScoredCard from "../components/FootballScoredCard";
import UseApi from "../ws/UseApi";
import { useState,useEffect } from "react";
const HomeScreen = ({navigation})=>{
    const [data,setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const apiUrl = 'http://127.0.01:3005/api/matches';
            const result = await UseApi(apiUrl);
            console.log(result.length);
            setData(result);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
    }, []);
    return (
        <View style={styles.container}>
            <FootballScoredCard
                homeTeam="FC Barcelona"
                awayTeam="Real Madrid"
                homeScore={3}
                awayScore={1}
            />
            <Button
                title="Go to Match"
                onPress={() => navigation.navigate('Match')}
            />
        </View>
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