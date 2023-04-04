import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [userInfo, setUserInfo] = useState<FirebaseAuthTypes.User>();

  const handleLogin = () => {
    if (email && password) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          if (user) {
            setUserInfo(user);
            setIsLogin(true);
          }
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          console.error(error);
        });
    } else {
      console.log('Error');
    }
  };
  const handleRegister = async () => {
    if (email && password && rePassword && password === rePassword) {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          if (user) {
            setUserInfo(user);
            setIsRegister(false);
          }
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          console.error(error);
        });
    } else {
      console.log('Error');
    }
  };

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        setIsLogin(false);
        setUserInfo(undefined);
      });
  };

  return (
    <View style={styles.loginFormContainer}>
      {isLogin && userInfo ? (
        <View>
          <Text>Hey {userInfo.email}</Text>
          <Text onPress={handleLogout}>LogOut</Text>
        </View>
      ) : (
        <>
          <Text style={styles.loginFormHeading}>MyBlog App</Text>
          <View style={styles.loginFormInputContainer}>
            <TextInput
              style={styles.loginFormInput}
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.loginFormInputContainer}>
            <TextInput
              style={styles.loginFormInput}
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          {isRegister && (
            <View style={styles.loginFormInputContainer}>
              <TextInput
                style={styles.loginFormInput}
                placeholder="Confirm Password"
                value={rePassword}
                onChangeText={text => setRePassword(text)}
                secureTextEntry={true}
              />
            </View>
          )}

          <View style={styles.Buttons}>
            <TouchableOpacity style={styles.loginButtonContainer}>
              <Text
                style={styles.loginButton}
                onPress={isRegister ? handleRegister : handleLogin}>
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
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loginFormContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C7E9B0',
  },
  loginFormHeading: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
  },
  loginFormInputContainer: {
    marginTop: 20,
  },
  loginFormInput: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
  },
  Buttons: {
    marginTop: 40,
  },
  loginButtonContainer: {
    width: 300,
    marginTop: 20,
  },
  loginButton: {
    width: 300,
    height: 40,
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 20,
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 20,
  },
  registerButtonContainer: {
    width: 300,
    marginTop: 20,
  },
  registerButton: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 20,
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 20,
  },
});

export default Login;
