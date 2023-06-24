import { StyleSheet, View, ActivityIndicator } from 'react-native';

const LoaderApi = ()=>{
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large"/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  }
});

export default LoaderApi;