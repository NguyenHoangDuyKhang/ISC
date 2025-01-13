import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';

const List_comment = () => {
  const comments = [
    {
      id: 1,
      name: 'Người dùng 1',
      avatar:
        'https://i.pinimg.com/736x/c7/de/26/c7de26acfd7f1f6934f3aceb15598912.jpg',
      content: 'Đây là nội dung bình luận số 1',
    },
    {
      id: 2,
      name: 'Người dùng 2',
      avatar:
        'https://i.pinimg.com/736x/e9/4a/b1/e94ab1e47e8abbebd4787c79c4126d78.jpg',
      content: 'Đây là nội dung bình luận số 2',
    },
    {
      id: 3,
      name: 'Người dùng 3',
      avatar:
        'https://i.pinimg.com/736x/d8/7e/8b/d87e8be69ce4805293e49890add49092.jpg',
      content: 'Đây là nội dung bình luận số 3',
    },
  ];

  const [reply, setReply] = useState<{[key: number]: string}>({});
  const [isReplying, setIsReplying] = useState<{[key: number]: boolean}>({});

  const handleReply = (id: number) => {
    setIsReplying(prev => ({...prev, [id]: true}));
  };

  const handleInputChange = (id: number, text: string) => {
    setReply(prev => ({...prev, [id]: text}));
  };

  const handleSubmit = (id: number) => {
    Alert.alert(`Bạn đã trả lời bình luận số ${id}: ${reply[id]}`);
    setIsReplying(prev => ({...prev, [id]: false}));
    setReply((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <View style={styles.container}>
      {comments.map(comment => (
        <View key={comment.id} style={styles.comment}>
          <Image source={{uri: comment.avatar}} style={styles.avatar} />
          <View style={styles.commentContent}>
            <Text style={styles.nameText}>{comment.name}</Text>
            <Text style={styles.contentText}>{comment.content}</Text>
            <TouchableOpacity onPress={() => handleReply(comment.id)}>
              <Text style={styles.replyButton}>Trả lời</Text>
            </TouchableOpacity>
            {isReplying[comment.id] && (
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Nhập câu trả lời..."
                  value={reply[comment.id]}
                  onChangeText={text => handleInputChange(comment.id, text)}
                  onSubmitEditing={() => handleSubmit(comment.id)}
                />
              </View>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  contentText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
  },
  replyButton: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 5,
    marginTop: 5,
    fontSize: 14,
  },
});

export default List_comment;
