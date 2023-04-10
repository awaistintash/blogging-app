/* eslint-disable react/react-in-jsx-scope */
// import {useEffect} from 'react';
import CreateBlog from './CreateBlog';
import Profile from './Profile';
import Blogs from './Blogs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import useGetBlogs from '../firebase';

const Stack = createBottomTabNavigator();

const AppNavigator = () => {
  useGetBlogs();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="CreateBlog" component={CreateBlog} />
      <Stack.Screen name="Blogs" component={Blogs} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
