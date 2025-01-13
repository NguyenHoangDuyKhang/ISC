import React from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';

const List_img = () => {
  const images = [
    { id: 1, src: 'https://i.pinimg.com/736x/8a/97/ab/8a97abf87526fc58db514efd704227e5.jpg' },
    { id: 2, src: 'https://i.pinimg.com/736x/8a/97/ab/8a97abf87526fc58db514efd704227e5.jpg' },
    { id: 3, src: 'https://i.pinimg.com/736x/8a/97/ab/8a97abf87526fc58db514efd704227e5.jpg' },
    { id: 4, src: 'https://i.pinimg.com/736x/8a/97/ab/8a97abf87526fc58db514efd704227e5.jpg' },
    { id: 5, src: 'https://i.pinimg.com/736x/8a/97/ab/8a97abf87526fc58db514efd704227e5.jpg' },
    { id: 6, src: 'https://i.pinimg.com/736x/8a/97/ab/8a97abf87526fc58db514efd704227e5.jpg' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {images.map((image) => (
          <View key={image.id} style={styles.imageWrapper}>
            <Image source={{ uri: image.src }} style={styles.image} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    width: '48%',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
});

export default List_img;
