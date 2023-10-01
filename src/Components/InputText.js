import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

//TextInput

const InputText = props => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={props.title}
        onChangeText={props.onChange}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        autoCapitalize={props.autoCapitalize}
      />
      {props.isEyePresent ? (
        <TouchableOpacity style={styles.eyeButton} onPress={props.onPress}>
          <Image
            source={
              props.isPasswordValue === false
                ? require('../../assets/common/eye.png')
                : require('../../assets/common/hide_eye.png')
            }
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  textInputContainer: {
    borderRadius: 10,
    marginTop: 8,
    marginHorizontal: 20,
    height: 60,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    padding: 18,
    fontSize: 19,
    alignContent: 'center',
  },
  eyeIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
});

export default InputText;
