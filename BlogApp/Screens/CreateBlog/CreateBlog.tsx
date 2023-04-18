import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

import {styles} from './styles';

import {useBlogs} from '../../services/useBlogs';

const CreateBlog = () => {
  const {handleCreateBlog} = useBlogs();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const changeTitle = (text: string) => {
    setTitle(text);
  };

  const changeContent = (text: string) => {
    setContent(text);
  };

  const createBlog = () => {
    const response = handleCreateBlog(title, content);
    response ? resetStates() : null;
  };

  const resetStates = () => {
    setTitle('');
    setContent('');
  };

  return (
    <View style={styles.loginFormContainer}>
      <View style={styles.blogContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create Blog</Text>
        </View>
        <View style={styles.blogPostContainer}>
          <View style={styles.inputs}>
            <TextInput
              style={styles.inputTitle}
              placeholder="Enter Title"
              value={title}
              onChangeText={text => changeTitle(text)}
            />
            <TextInput
              style={styles.inputContent}
              placeholder="Enter Content"
              value={content}
              onChangeText={text => changeContent(text)}
            />
            <Button title="Add Blog Post" onPress={createBlog} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreateBlog;
