import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity,Image,StyleSheet } from 'react-native';
import TrackPlayerService from '../components/Trackplayer';
 
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlayerScreen = ({ route }:any) => {
    const { song } = route.params;
    const [isPlayerReady, setIsPlayerReady] = useState(false);

    useEffect(() => {
        const setupPlayer = async () => {
            try {
                console.log("Initializing TrackPlayer...");
                await TrackPlayerService.setup(); // Initialize the player
                console.log("Adding track:", song);
                await TrackPlayerService.addTrack(song);
                console.log("Track added successfully!");
                setIsPlayerReady(true);
            } catch (error:any) {
                console.error("Error setting up player:", error);
                Alert.alert("Error", `Failed to initialize the player: ${error.message}`);
            }
        };

        setupPlayer();

        return () => {
            TrackPlayerService.reset(); // Clean up on unmount
        };
    }, [song]);

    const playMusic = async () => {
        if (isPlayerReady) {
            try {
                await TrackPlayerService.play();
            } catch (error) {
                console.error("Error playing music:", error);
                Alert.alert("Error", "Failed to play the music.");
            }
        } else {
            Alert.alert("Player is not ready", "Please wait for the player to initialize.");
        }
    };

    const pauseMusic = async () => {
        if (isPlayerReady) {
            try {
                await TrackPlayerService.pause();
            } catch (error) {
                console.error("Error pausing music:", error);
                Alert.alert("Error", "Failed to pause the music.");
            }
        }
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
        <Image source={{ uri: song.image }} style={styles.image} />
      
        <View style={styles.controlsContainer}>
          <TouchableOpacity onPress={playMusic}>
            <Icon name="play-circle" size={80} color="#6a1b9a" />
          </TouchableOpacity>
          <TouchableOpacity onPress={pauseMusic}>
            <Icon name="pause-circle" size={80} color="#6a1b9a" />
          </TouchableOpacity>
        </View>
      </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5', // Light background for contrast
      
      alignItems: 'center',
    },
    title: {
      fontSize: 28, // Larger font size for better readability
      fontWeight: '700',
      color: '#2c2c2c', // Darker color for contrast
      marginBottom: 15,
      textAlign: 'center',
    },
    artist: {
      fontSize: 22, // Increased font size for the artist
      color: '#4a4a4a', // Slightly lighter than the title for contrast
      marginBottom: 25,
      textAlign: 'center',
    },
    image: {
      width: 300, // Increased image width
      height: 300, // Increased image height
      borderRadius: 15, // Slightly more rounded corners
      marginBottom: 35,
    },
    controlsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '50%', // Adjusted width for better control button spacing
    },
  });
  
export default PlayerScreen;
