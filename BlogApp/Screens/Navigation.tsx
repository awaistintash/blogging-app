/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import {useSelector} from 'react-redux';
import AppNavigator from './AppNavigator';
// import CreateBlog from './CreateBlog';

const Navigation = () => {
  const user = useSelector((state: any) => state.user?.userDetails);
  return (
    <NavigationContainer>
      {user.uid ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
