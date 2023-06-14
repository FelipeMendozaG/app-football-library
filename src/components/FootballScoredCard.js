import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const FootballScoredCard = ({ homeTeam, awayTeam, navigation})=>{
    return (
        <View style={styles.container}>
            <View style={styles.teamContainer}>
                <Text style={styles.teamName}>{homeTeam}</Text>
                {/* <Text style={styles.score}>{homeScore}</Text> */}
            </View>
            <View>
              <TouchableHighlight onPress={()=>navigation()}>
                <Icon name="soccer-ball-o" size={24} color="#000" style={styles.icon} />
              </TouchableHighlight>
            </View>
            <View style={styles.teamContainer}>
                <Text style={styles.teamName}>{awayTeam}</Text>
                {/* <Text style={styles.score}>{awayScore}</Text> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginBottom:10,
      marginTop:20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    teamContainer: {
      alignItems: 'center',
      width:125
    },
    teamName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    score: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 5,
    },
    icon: {
        marginBottom: 5,
    }
});

export default FootballScoredCard;