/* eslint-disable react/react-in-jsx-scope */
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
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

  return (
    <ScrollView
      style={styles.blogsContainer}
      contentContainerStyle={styles.contentContainerStyle}>
      <Text style={styles.blogsTitle}>My Blogs</Text>
      {blogs.map((blog: BlogDetailState, index: number) => {
        if (blog.email === user.email) {
          return (
            <View key={index} style={styles.blogContainer}>
              <View style={styles.blogTitle}>
                <Text style={styles.title}>{blog.title}</Text>
                <Text>by {blog.email}</Text>
              </View>
              <View style={styles.blogContent}>
                <Text style={styles.content}>{blog.content}</Text>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttons}>
                  <Text
                    style={styles.editButton}
                    onPress={() => {
                      navigateToEditBlog(blog);
                    }}>
                    EDIT
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => {
                    handleDelBlog(blog.blogId);
                  }}>
                  <Text style={styles.deleteButton}>DELETE</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }
      })}
    </ScrollView>
  );
};

export default MyBlogs;
