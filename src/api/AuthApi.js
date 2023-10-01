import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';

const users = [];

export const register = async newUser => {
  //  delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Check if the user with the same email already exists
  const existingUser = users.find(user => user.email === newUser.email);
  if (existingUser) {
    return {
      success: false,
      message: 'Email already in use',
    };
  } else {
    const newUserId = users.length + 1;
    const userToAdd = {
      id: newUserId,
      email: newUser.email,
      password: newUser.password,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
    };
    users.push(userToAdd);

    // Store the user data in AsyncStorage
    await AsyncStorage.setItem(`user_${newUserId}`, JSON.stringify(userToAdd));

    //successful response
    return {
      success: true,
      message: 'Registration successful',
      user: {
        id: newUserId,
        email: userToAdd.email,
        firstName: userToAdd.firstName,
        lastName: userToAdd.lastName,
      },
    };
  }
};

export const login = async (email, password) => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Check if a user exists
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    return {
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  } else {
    return {
      success: false,
      message: 'Invalid email or password',
    };
  }
};
