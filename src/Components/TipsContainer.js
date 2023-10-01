/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

// small container for home screen

const TipsContainer = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.smallText}>{props.title}</Text>
        </View>
        <View style={styles.subHeading}>
          <Text style={styles.subHeading_Text}>{props.subTitle}</Text>
        </View>

        <View style={[styles.subHeading, {position: 'absolute', bottom: 7}]}>
          <Text style={styles.subHeadingSmall_Text}>{props.bottomText}</Text>

          {props.timeValue ? (
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/common/clock.png')}
                style={styles.icon}
              />
              <Text style={styles.timeText}>{props.timeValue}</Text>
            </View>
          ) : null}
        </View>
      </View>

      <View style={styles.rightContainer}>
        <Image
          source={require('../../assets/common/diet.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 20,
  },
  leftContainer: {
    flex: 2,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },

  topContainer: {
    backgroundColor: '#E0F5EE',
    marginHorizontal: 30,
    borderRadius: 10,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 60,
    padding: 5,
  },
  subHeading: {
    marginLeft: 30,
    marginTop: 10,
  },
  subHeading_Text: {
    fontSize: 17,
    fontWeight: '500',
  },
  subHeadingSmall_Text: {
    fontSize: 13,
    color: 'grey',
  },
  icon: {
    width: 15,
    height: 15,
  },
  timeText: {
    color: 'grey',
    fontSize: 14,
    marginLeft: 6,
  },
});
export default TipsContainer;
