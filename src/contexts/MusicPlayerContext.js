import { createContext, useContext, useRef, useState } from "react";
import { MusicStoreContext } from "./MusicStoreContext";

export const MusicPlayerContext = createContext({
    song: null, //
    isPlaying: false, //
    togglePlay: () => { }, //
    onChangeSong: () => { } //
  })
  
  const MusicPlayerProvider = ({ children }) => {
    const {onRandomSong}= useContext(MusicStoreContext);
    const audioPlayer = useRef(new Audio());

    const [song, setSong] = useState(() => {
        const randomSong = onRandomSong();
        console.log('random song:', randomSong, audioPlayer.current)
        audioPlayer.current = new Audio(randomSong.file);
        return randomSong
    }); // {name: "heaven's On Fire - Jazz", file: Track2 }

    const [isPlaying, setIsPlaying] = useState(false);
  
    const togglePlay = () => {
      setIsPlaying(prev => {
        if (prev) {
            audioPlayer.current.pause();
        } else {
            audioPlayer.current.play();
        }
        return !prev
      });
    }

    const stopMusic=()=>{
      audioPlayer.current.pause();
      setIsPlaying(false);
    }
  
    const onChangeSong = (newSong) => {
      setSong(newSong);
      audioPlayer.current = new Audio(newSong.file);
      audioPlayer.current.play();
      setIsPlaying(true);
    }
  
    // useEffect(() => {
    //   if (!song) return;
  
    //   if (!isPlaying) {
    //     audioPlayer.current.pause();
    //   } else {
    //     audioPlayer.current.play();
    //   }
    // }, [isPlaying, song]);
  
    return (
      <MusicPlayerContext.Provider value={{ song, isPlaying, togglePlay,stopMusic, onChangeSong }}>
        {children}
      </MusicPlayerContext.Provider>
    )
  }
  
  export default MusicPlayerProvider
  
  
  