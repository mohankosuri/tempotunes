// TrackPlayerService.js
import TrackPlayer from 'react-native-track-player';

class TrackPlayerService {
    static instance;

    static async setup() {
        if (!this.instance) {
            this.instance = true; // Set the instance to true once initialized
            await TrackPlayer.setupPlayer();
        }
    }

    static async addTrack(song) {
        await TrackPlayer.add({
            id: song.id.toString(),
            url: song.url,
            title: song.title,
            artist: song.artist,
        });
    }

    static async play() {
        await TrackPlayer.play();
    }

    static async pause() {
        await TrackPlayer.pause();
    }

    static async reset() {
        await TrackPlayer.reset();
    }
}

export default TrackPlayerService;
