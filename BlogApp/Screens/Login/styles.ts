import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
