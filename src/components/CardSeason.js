import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const CardSeason = ({name})=>{
    const navigation = useNavigation();
    const SelectSeason=(season)=>{
        navigation.navigate('Home',{season_param:season});
    }

    return (
        <TouchableOpacity onPress={()=>SelectSeason(name)}>
            <View style={styles.card}>
                <Text style={styles.title_header}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    card:{
        // height:100,
        backgroundColor:'white',
        padding: 20,
        borderRadius: 9,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: Dimensions.get('window').width / 2 - 15,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title_header:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
});
export default CardSeason;