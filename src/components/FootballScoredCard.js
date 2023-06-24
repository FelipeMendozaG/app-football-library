import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const FootballScoredCard = ({ homeTeam, awayTeam, navigation, competition, season})=>{
    return (
        <View style={styles.container}>
          <View style={styles.card_content}>
            <View style={styles.card_header}>
              <Text style={styles.text_header}>{competition}</Text>
            </View>
            <View style={styles.card_body}>
              <View style={styles.teamContainer}>
                <Text style={styles.teamName}>{homeTeam}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={()=>navigation()}>
                  <Icon name="soccer-ball-o" size={24} color="#000" style={styles.icon} />
                </TouchableOpacity>
              </View>
              <View style={styles.teamContainer}>
                <Text style={styles.teamName}>{awayTeam}</Text>
              </View>
            </View>
            <View style={styles.card_footer}>
              <Text>Temporada:<Text style={{fontWeight:'bold'}}>{season}</Text></Text>
            </View>
            {/* <View style={styles.favoriteButtonContainer}>
              <TouchableOpacity style={styles.favoriteButton}>
                <Icon name="heart" size={24} color="red" />
              </TouchableOpacity>
            </View> */}
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
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft:5,
      marginRight:5
    },
    score: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 5,
    },
    icon: {
        marginBottom: 5,
    },
    card_header:{
      textAlign:'center',
      alignContent:'center',
      marginBottom:10
    },
    card_body:{
      flexDirection:'row'
    },
    card_content:{
      flexDirection:'column',
      alignContent:'center'
    },
    text_header:{
      textAlign:'center',
      fontSize:18,
      fontWeight:'500',
    },
    card_footer:{
      flexDirection:'column',
      alignItems:'center',
      marginTop:8
    },
    favoriteButtonContainer: {
      alignItems: 'center',
      marginTop: 10,
    },
    favoriteButton: {
      padding: 10,
      borderRadius: 50,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
});

export default FootballScoredCard;