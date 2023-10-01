import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Button from '../Components/Button';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.main_container}>
      <ImageBackground
        source={require('../../assets/common/diet.jpg')}
        style={styles.imageBackground}>
        <View style={styles.bottom_container}>
          <Button
            title="Sign Up and try it for free"
            backgroundColorValue={'#66B039'}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
          <Button
            title="Already a member?Log in"
            isBorderPresent
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          />
          <TouchableOpacity
            style={styles.skip_margin}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.skip_text}>Skip for now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  bottom_container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    right: 0,
    left: 0,
  },
  skip_margin: {
    marginTop: 15,
  },
  skip_text: {
    fontSize: 16,
  },
});
export default LoginScreen;
