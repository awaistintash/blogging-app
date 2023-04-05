import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addBlogPost} from '../redux/blogSlice';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const userID = useSelector((state: any) => state.user?.userDetails);
  const blogs = useSelector((state: any) => state.blogs?.blogDetails);
  console.log('blogs::', blogs);

  const dispatch = useDispatch();

  return (
    <View style={styles.blogContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create Blog #{blogs.length}</Text>
      </View>
      <View style={styles.blogPostContainer}>
        <View style={styles.inputs}>
          <TextInput
            style={styles.inputTitle}
            placeholder="Enter Title"
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <TextInput
            style={styles.inputContent}
            placeholder="Enter Content"
            value={content}
            onChangeText={text => setContent(text)}
          />
        </View>
        <View style={styles.addButton}>
          <Button
            title="Add Blog Post"
            onPress={() => {
              if (title && content) {
                dispatch(addBlogPost({title, content, userID}));
                setTitle('');
                setContent('');
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blogContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '80%',
  },
  titleContainer: {
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
  blogPostContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputs: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputTitle: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  inputContent: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  addButton: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default CreateBlog;
