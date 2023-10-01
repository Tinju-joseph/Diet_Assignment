import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const Button = props => {
  const styles = StyleSheet.create({
    button: {
      padding: 20,
      borderRadius: 20,
      height: 45,
      marginTop: 15,
      marginHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: props.isBorderPresent
        ? '#ffffff'
        : props.isBorderBlack
        ? '#000000'
        : 'transparent',
      borderWidth: props.isBorderPresent || props.isBorderBlack ? 1 : 0,
    },
    buttonText: {
      fontSize: 17,
      fontWeight: '600',
    },
    buttonImage: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    rowContainer: {
      flexDirection: 'row',
    },
  });

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: props.backgroundColorValue}]}
        disabled={props.disabled}
        onPress={props.onPress}>
        <View style={styles.rowContainer}>
          <Image source={props.imageSource} style={styles.buttonImage} />
          <Text style={[styles.buttonText, {color: props.color}]}>
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
