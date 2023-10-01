import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const SearchInputContainer = props => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.rowContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Search"
          placeholderTextColor={'grey'}
        />
        <TouchableOpacity
          style={styles.filterContainer}
          onPress={props.navigationTo}>
          <Image
            source={require('../../assets/common/filter.png')}
            style={styles.filterImage}
          />
        </TouchableOpacity>
      </View>
    </View>
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

  inputText: {
    marginLeft: 15,
    fontSize: 17,
    width: 230,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#167C76',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterImage: {
    width: '70%',
    height: '70%',
    resizeMode: 'cover',
  },
});
export default SearchInputContainer;
