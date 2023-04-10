/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import MyBlogs from './MyBlogs';

const Profile = () => {
  const user = useSelector((state: any) => state.user?.userDetails);

  return (
    <>
      <View>
        <Text>{user?.email}</Text>
      </View>
      <MyBlogs />
    </>
  );
};

export default Profile;
