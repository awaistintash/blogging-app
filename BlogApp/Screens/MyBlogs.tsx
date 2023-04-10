/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {BlogDetailState} from '../redux/blogSlice';

const Blogs = () => {
  const user = useSelector((state: any) => state.user?.userDetails);
  const blogs = useSelector((state: any) => state.blogs?.blogDetails);

  return (
    <ScrollView
      style={styles.blogsContainer}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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
            </View>
          );
        }
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  blogsContainer: {
    flex: 1,
    backgroundColor: '#C7E9B0',
  },
  blogsTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
  },
  blogContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '80%',
    border: '1px solid #000',
    borderRadius: 5,
  },
  blogTitle: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  blogContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    fontSize: 20,
    color: '#000',
  },
});

export default Blogs;
