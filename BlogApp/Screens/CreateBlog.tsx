import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useBlogs} from '../services/useBlogs';

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
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default CreateBlog;
