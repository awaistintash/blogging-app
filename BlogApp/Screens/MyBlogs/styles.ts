import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  blogsContainer: {
    flex: 1,
    backgroundColor: '#C7E9B0',
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blogsTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
  },
  blogContainer: {
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
  buttons: {
    flex: 1,
    flexDirection: 'row',
  },
  editButton: {
    fontSize: 20,
    color: 'blue',
  },
  deleteButton: {
    fontSize: 20,
    color: 'red',
  },
});
