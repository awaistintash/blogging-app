/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MyBlogs from '../MyBlogs/MyBlogs';

import {ProfileStackParamList} from '../../utils/types';

type Props = NativeStackScreenProps<ProfileStackParamList>;

const Profile = ({navigation, route}: Props) => {
  const user = useSelector((state: any) => state.user?.userDetails);

  return (
    <>
      <View>
        <Text>{user?.email}</Text>
      </View>
      <MyBlogs navigation={navigation} route={route} />
    </>
  );
};

export default Profile;
