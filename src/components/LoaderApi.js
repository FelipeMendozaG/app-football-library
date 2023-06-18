import { StyleSheet,Text,View } from 'react-native';
/* import AnimatedLoader from "react-native-animated-loader"; */

const LoaderApi = ()=>{
    return (
      <View styles={styles.lottie}>
        <Text styles={styles.text_loader}>Cargando informacion</Text>
        {/* <AnimatedLoader
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            animationStyle={styles.lottie}
            speed={1}>
      </AnimatedLoader> */}
      </View>
    )
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  },
  text_loader:{
    alignContent:'center',
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center'
  }
});
export default LoaderApi;