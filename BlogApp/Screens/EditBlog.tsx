import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {editBlog} from '../redux/blogSlice';
import {AppDispatch} from '../store';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParamList} from '../utils/types';

type Props = NativeStackScreenProps<ProfileStackParamList, 'EditBlog'>;

const EditBlog = ({navigation, route}: Props) => {
  const blog = route.params.blog;
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  const user = useSelector((state: any) => state.user?.userDetails);

  const dispatch = useDispatch<AppDispatch>();

  const handleEditBlog = () => {
    const createdAt = new Date();
    if (title && content) {
      dispatch(
        editBlog({
          blogId: blog.blogId,
          title: title,
          content: content,
          uid: user?.uid,
          email: user?.email,
          createdAt: createdAt.toString(),
        }),
      );
      resetStates();
    }
  };

  const resetStates = () => {
    setTitle('');
    setContent('');
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.loginFormContainer}>
      <View style={styles.blogContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Edit Blog</Text>
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
            <Button title="Edit Blog Post" onPress={handleEditBlog} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginFormContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C7E9B0',
  },
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
  },
});

export default EditBlog;
