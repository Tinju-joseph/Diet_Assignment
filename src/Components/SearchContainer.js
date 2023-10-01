import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

//common search container

const SearchContainer = props => {
  return (
    <TouchableOpacity style={styles.inputContainer} onPress={props.onPress}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../assets/common/search.png')}
          style={styles.icon}
        />

        <Text style={styles.searchText}>Search</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    height: 45,
    borderColor: '#B4B7AF',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    marginTop: 15,
  },
  icon: {
    width: 15,
    height: 15,
    marginLeft: 15,
  },
  searchText: {
    marginLeft: 15,
  },
});
export default SearchContainer;
