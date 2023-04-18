import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useBlogs} from '../../services/useBlogs';

import {styles} from '../CreateBlog/styles';

import {ProfileStackParamList} from '../../utils/types';

type Props = NativeStackScreenProps<ProfileStackParamList, 'EditBlog'>;

const EditBlog = ({navigation, route}: Props) => {
  const blog = route.params.blog;

  const {handleEditBlog} = useBlogs();

  const [title, setTitle] = useState(blog.title || '');
  const [content, setContent] = useState(blog.content || '');

  const editBlog = () => {
    const response = handleEditBlog(blog.blogId, title, content);
    response ? resetStates() : null;
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
            <Button title="Edit Blog Post" onPress={editBlog} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditBlog;
