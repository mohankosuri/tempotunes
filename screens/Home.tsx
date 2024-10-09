import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import songs from '../data/songs';

const Home = ({ navigation }: any) => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.songContainer} onPress={() => navigation.navigate('Player', { song: item })}>
      <Image source={{ uri: item.image }} style={styles.songImage} />
      <Text style={styles.songTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}  // This will display 2 items per row
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  songContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0', // Optional: add some background color
    borderRadius: 10,
    padding: 10,
  },
  songImage: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  songTitle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    fontWeight:"bold"
  },
});
