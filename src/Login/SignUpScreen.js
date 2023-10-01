import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import InputText from '../Components/InputText';
import Button from '../Components/Button';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

  //check email contains @gmail.com
  const checkEmailValid = email => {
    const validEmail = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/;
    return validEmail.test(email);
  };
  // email validation
  const verifyEmail = () => {
    if (checkEmailValid(email)) {
      navigation.navigate('SignUpDetails', {userEmail: email});
    } else {
      Alert.alert('Please enter valid email');
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
        <Text style={styles.title}>Sign up to start your free trial</Text>
      </View>
      <View style={styles.bottomContainer}>
        <InputText
          title={'Email'}
          value={email}
          onChange={text => setEmail(text)}
          autoCapitalize="none"
        />
        <Button
          title={'Continue'}
          color={'#ffffff'}
          onPress={verifyEmail}
          backgroundColorValue={'black'}
        />
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
        </View>
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
  backText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  bottomContainer: {
    justifyContent: 'center',
    marginTop: 40,
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

export default SignUpScreen;
