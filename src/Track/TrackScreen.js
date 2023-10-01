import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TrackScreen = () => {
  return (
    <View style={styles.main_Container}>
      <Text>Track</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  main_Container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TrackScreen;
