import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const MealsContainer = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.topContainer}>
        <Image
          source={require('../../assets/common/diet.jpg')}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{props.mealTime}</Text>
        </View>
        <View style={styles.favContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/common/fav.png')}
              style={styles.favIcon}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomRow}>
          <Text style={styles.text}>{props.mealName}</Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/common/dots.png')}
              style={styles.dotIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRatingRow}>
          <Image
            source={require('../../assets/common/star.png')}
            style={styles.icon}
          />
          <Text style={styles.timeText}>4.5</Text>
          <Image
            source={require('../../assets/common/clock.png')}
            style={styles.icon}
          />
          <Text style={styles.timeText}>30 min</Text>
          <Text style={styles.timeText}>Easy</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 150,
  },
  text: {
    padding: 10,
    fontSize: 16,
    width: 210,
    fontWeight: '500',
    textAlign: 'left',
  },
  topContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomRatingRow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  icon: {
    width: 15,
    height: 15,
  },
  timeText: {
    color: 'grey',
    fontSize: 14,
    padding: 5,
    marginRight: 4,
  },
  dotIcon: {
    width: 23,
    height: 23,
    marginRight: 15,
  },
  labelContainer: {
    backgroundColor: '#285244',
    marginHorizontal: 30,
    borderRadius: 10,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 60,
    padding: 5,
    position: 'absolute',
  },
  labelText: {
    flex: 1,
    color: '#ffffff',
  },
  favContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
    position: 'absolute',
    right: 20,
  },
  favIcon: {
    width: 20,
    height: 20,
  },
});
export default MealsContainer;
