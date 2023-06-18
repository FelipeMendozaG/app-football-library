import { StyleSheet,Text } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

const LoaderApi = ()=>{
    return (
        <AnimatedLoader
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            animationStyle={styles.lottie}
            speed={1}>
        <Text>Cargando informacion</Text>
      </AnimatedLoader>
    )
}

const styles = StyleSheet.create({
    lottie: {
      width: 100,
      height: 100
    }
});
export default LoaderApi;