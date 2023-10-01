import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import InputText from '../Components/InputText';
import Button from '../Components/Button';
import {login} from '../api/AuthApi';

const SignInScreen = ({navigation}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkEmailValid = email => {
    const validEmail = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/;
    return validEmail.test(email);
  };

  const loginVerify = async () => {
    if (email && password && checkEmailValid(email)) {
      setIsLoading(true);
      const loginResult = await login(email, password);
      setIsLoading(false);
      if (loginResult.success) {
        console.log('success', loginResult);
        navigation.navigate('Home');
      } else {
        Alert.alert('Please enter valid email');
      }
    } else {
      Alert.alert('Please enter a valid email or password');
    }
  };
  return (
    <View style={styles.main_Container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.backButton}>
          <Image
            source={require('../../assets/common/back.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Log in</Text>
      </View>
      <View style={styles.bottomContainer}>
        <InputText
          title={'Email'}
          value={email}
          onChange={text => setEmail(text)}
          autoCapitalize="none"
        />
        <InputText
          title={'Password'}
          value={password}
          onChange={text => setPassword(text)}
          secureTextEntry={!isPasswordVisible}
          isEyePresent
          isPasswordValue={isPasswordVisible}
          onPress={() => setPasswordVisible(!isPasswordVisible)}
        />
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgotten Password</Text>
        </TouchableOpacity>
        <Button
          title={'Log in'}
          onPress={loginVerify}
          color={'#ffffff'}
          backgroundColorValue={'black'}
          disabled={isLoading}
        />
      </View>
      <View style={styles.line_container}>
        <View style={styles.line} />
        <Text style={styles.text}>or</Text>
        <View style={styles.line} />
      </View>
      <View>
        <Button
          title={'Continue with Facebook'}
          isBorderBlack
          imageSource={require('../../assets/common/fb.png')}
        />
        <Button
          title={'Continue with Google'}
          isBorderBlack
          imageSource={require('../../assets/common/google.png')}
        />
        <Button
          title={'Continue with Apple'}
          isBorderBlack
          imageSource={require('../../assets/common/mac.png')}
        />
        {isLoading && (
          <View style={{marginTop: 20}}>
            <ActivityIndicator size="large" color="black" />
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main_Container: {
    flex: 1,
    backgroundColor: 'white',
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

  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  bottomContainer: {
    justifyContent: 'center',
    marginTop: 40,
  },
  forgotText: {
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 15,
    color: 'blue',
  },
  line_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
export default SignInScreen;
