import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {styles} from './styles';

import {useBlogs} from '../../services/useBlogs';

const Login = () => {
  const {handleRegister, handleLogin} = useBlogs();

  const [isRegister, setIsRegister] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const changeEmail = (text: string) => {
    setUserEmail(text);
  };

  const changePassword = (text: string) => {
    setPassword(text);
  };

  const changeRePassword = (text: string) => {
    setRePassword(text);
  };

  const userLogin = () => {
    if (isRegister) {
      handleRegister(userEmail, password, rePassword);
      setIsRegister(false);
    } else {
      handleLogin(userEmail, password);
    }
  };

  return (
    <View style={styles.loginFormContainer}>
      <Text style={styles.loginFormHeading}>MyBlog App</Text>
      <View style={styles.loginFormInputContainer}>
        <TextInput
          style={styles.loginFormInput}
          placeholder="Email"
          value={userEmail}
          onChangeText={text => changeEmail(text)}
        />
      </View>
      <View style={styles.loginFormInputContainer}>
        <TextInput
          style={styles.loginFormInput}
          placeholder="Password"
          value={password}
          onChangeText={text => changePassword(text)}
          secureTextEntry={true}
        />
      </View>
      {isRegister && (
        <View style={styles.loginFormInputContainer}>
          <TextInput
            style={styles.loginFormInput}
            placeholder="Confirm Password"
            value={rePassword}
            onChangeText={text => changeRePassword(text)}
            secureTextEntry={true}
          />
        </View>
      )}

      <View style={styles.Buttons}>
        <TouchableOpacity style={styles.loginButtonContainer}>
          <Text style={styles.loginButton} onPress={userLogin}>
            {isRegister ? 'Sign Up' : 'Login'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButtonContainer}
          onPress={() => setIsRegister(!isRegister)}>
          <Text style={styles.registerButton}>
            {isRegister ? 'Login' : 'Register'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
