/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Text, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import {styles} from './styles';

import {BlogDetailState} from '../../utils/types';

const Blogs = () => {
  const blogs = useSelector((state: any) => state.blogs?.blogDetails);

  return (
    <ScrollView
      style={styles.blogsContainer}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.blogsTitle}>Blogs</Text>
      {blogs.map((blog: BlogDetailState, index: number) => {
        return (
          <View key={index} style={styles.blogContainer}>
            <View style={styles.blogTitle}>
              <Text style={styles.title}>{blog.title}</Text>
              <Text>by {blog.email}</Text>
            </View>
            <View style={styles.blogContent}>
              <Text style={styles.content}>{blog.content}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Blogs;
