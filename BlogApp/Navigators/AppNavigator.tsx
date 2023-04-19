/* eslint-disable react/react-in-jsx-scope */
import CreateBlog from '../Screens/CreateBlog/CreateBlog';
import Profile from '../Screens/Profile/Profile';
import Blogs from '../Screens/Blogs/Blogs';
import EditBlog from '../Screens/EditBlog/EditBlog';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import useGetBlogs from '../firebase';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, ProfileStackParamList} from '../utils/types';

const RootStack = createBottomTabNavigator<RootStackParamList>();

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

function ProfileScreenStack() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="EditBlog" component={EditBlog} />
    </ProfileStack.Navigator>
  );
}

const AppNavigator = () => {
  useGetBlogs();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {display: 'none'},
        tabBarActiveTintColor: '#000',
        tabBarLabelPosition: 'beside-icon',
      }}>
      <RootStack.Screen name="ProfileStack" component={ProfileScreenStack} />
      <RootStack.Screen name="CreateBlog" component={CreateBlog} />
      <RootStack.Screen name="Blogs" component={Blogs} />
    </RootStack.Navigator>
  );
};

export default AppNavigator;
