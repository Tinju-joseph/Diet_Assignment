import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import SearchContainer from '../Components/SearchContainer';

const EatScreen = ({navigation}) => {
  return (
    <View style={styles.main_Container}>
      <View style={styles.rowContainer}>
        <Text style={styles.headerText}>Eat</Text>
        <TouchableOpacity style={styles.cartContainer}>
          <Image
            source={require('../../assets/common/fav.png')}
            style={styles.cartImage}
          />
        </TouchableOpacity>
      </View>
      <SearchContainer
        onPress={() => {
          navigation.navigate('Search');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main_Container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
  },
  rowContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  cartContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: 'grey',
    backgroundColor: '#E0F5EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartImage: {
    width: '70%',
    height: '70%',
    resizeMode: 'cover',
  },
  headerText: {
    fontSize: 35,
    fontWeight: '600',
  },
});
export default EatScreen;
