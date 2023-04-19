/* eslint-disable react/react-in-jsx-scope */
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ProfileStackParamList, BlogDetailState} from '../../utils/types';

import {styles} from './styles';

import {useBlogs} from '../../services/useBlogs';

type Props = NativeStackScreenProps<ProfileStackParamList>;

const MyBlogs = ({navigation}: Props) => {
  const {handleDelBlog} = useBlogs();

  const user = useSelector((state: any) => state.user?.userDetails);
  const blogs = useSelector((state: any) => state.blogs?.blogDetails);

  const navigateToEditBlog = (blog: BlogDetailState) => {
    navigation.navigate('EditBlog', {
      blog,
    });
  };

  const renderBlog = ({item}: {item: BlogDetailState}) => {
    if (item.email === user.email) {
      return (
        <View key={item.blogId} style={styles.blogContainer}>
          <View style={styles.blogTitle}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>by {item.email}</Text>
          </View>
          <View style={styles.blogContent}>
            <Text style={styles.content}>{item.content}</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttons}>
              <Text
                style={styles.editButton}
                onPress={() => {
                  navigateToEditBlog(item);
                }}>
                EDIT
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                handleDelBlog(item.blogId);
              }}>
              <Text style={styles.deleteButton}>DELETE</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return null;
  };

  const keyExtractor = (item: BlogDetailState) => item.blogId.toString();

  return (
    <FlatList
      style={styles.blogsContainer}
      contentContainerStyle={styles.contentContainerStyle}
      data={blogs}
      renderItem={renderBlog}
      keyExtractor={keyExtractor}
      ListHeaderComponent={<Text style={styles.blogsTitle}>My Blogs</Text>}
    />
  );
};

export default MyBlogs;
