/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
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
import {register} from '../api/AuthApi';

const SignUpDetailScreen = ({navigation, route}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const {userEmail} = route.params;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(userEmail);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const checkAgreeStatement = () => {
    setIsChecked(!isChecked);
  };

  const checkEmailValid = email => {
    const validEmail = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/;
    return validEmail.test(email);
  };

  const verifySignUp = async () => {
    if (firstName && lastName && email && password && checkEmailValid(email)) {
      setIsLoading(true);
      const registrationResult = await register({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });
      setIsLoading(false);
      if (registrationResult.success) {
        console.log('success', registrationResult);
        navigation.navigate('SignIn');
      } else {
        Alert.alert(registrationResult.message);
      }
    } else {
      Alert.alert('Please enter valid email');
    }
  };

  useEffect(() => {
    if (firstName && lastName && email && password && isChecked) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [firstName, lastName, email, password, isChecked]);

  return (
    <View style={styles.main_Container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          style={styles.backButton}>
          <Image
            source={require('../../assets/common/back.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Finish Signing up</Text>
      </View>
      <View style={styles.bottomContainer}>
        <InputText
          title={'First Name'}
          value={firstName}
          onChange={text => setFirstName(text)}
        />
        <InputText
          title={'Last Name'}
          value={lastName}
          onChange={text => setLastName(text)}
        />
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
        <TouchableOpacity style={styles.check}>
          <TouchableOpacity
            style={[styles.checkbox, isChecked && styles.checked]}
            onPress={checkAgreeStatement}>
            {isChecked && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
          <Text style={styles.agreeText}>I agree to</Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.agreeText,
                {
                  color: '#000000',
                  fontWeight: 'bold',
                  marginStart: 5,
                },
              ]}>
              Terms & Conditions
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.agreeText,
              {
                marginStart: 5,
              },
            ]}>
            and
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.agreeText,
                {
                  color: '#000000',
                  fontWeight: 'bold',
                  marginStart: 5,
                },
              ]}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <Button
          title={'Next'}
          backgroundColorValue={isButtonDisabled ? '#6C6C6C' : 'black'}
          color={'#ffffff'}
          disabled={isButtonDisabled || isLoading}
          onPress={verifySignUp}
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
  check: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 18,
    backgroundColor: '#ffffff',
    padding: 10,
    borderColor: 'black',
    borderRadius: 8,
  },
  agreeText: {
    color: '#000000',
    fontSize: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  checked: {
    backgroundColor: '#66B039',
    borderColor: 'grey',
  },
  checkmark: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },

  back: {
    justifyContent: 'center',
    alignItems: 'center',
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
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default SignUpDetailScreen;
