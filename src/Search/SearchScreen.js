import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import TopTabScreen from '../Components/TopTabBar';

// main search screen

const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.main_Container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack(null);
          }}
          style={styles.backButton}>
          <Image
            source={require('../../assets/common/back.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Search</Text>
      </View>
      <TopTabScreen />
    </View>
  );
};
const styles = StyleSheet.create({
  main_Container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginTop: 20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },

  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
  },
});
export default SearchScreen;
