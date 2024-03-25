
import React, { createContext, useState } from "react";
import Track1 from "../mp3/track1.mp3";
import Track2 from "../mp3/track2.mp3";
import Track3 from "../mp3/track3.mp3";

const LIST = [
    {
      id: 1,
      name: "Cold Gin - Jazz",
      file: Track1,
    },
    {
      id: 2,
      name: "heaven's On Fire - Jazz",
      file: Track2,
    },
    {
      id: 3,
      name: "Beth - Jazz",
      file: Track3,
    },
  ]
  
  export const MusicStoreContext = createContext({
    tracks: LIST,
    onGetNextSong: () => { },
    onGetPrevSong: () => { }
  })
  
  const MusicStoreProvider = ({ children }) => {
    const [songs] = useState(LIST)
  
    const onGetNextSong = (currentSong) => {
      const currentIndex = songs.findIndex(song => song.id === currentSong.id)
  
      // last song
      if (currentIndex === songs.length - 1) return songs[0]
  
      return songs[currentIndex + 1]
  
    }
  
    const onGetPrevSong = (currentSong) => {
      const currentIndex = songs.findIndex(song => song.id === currentSong.id)
  
      // first song
      if (currentIndex === 0) return songs[songs.length - 1]
  
      return songs[currentIndex - 1]
    }
  
    const onRandomSong = () => {
      const randomIndex = Math.floor(Math.random() * songs.length)
      return songs[randomIndex]
  
    }
  
  
    return (
      <MusicStoreContext.Provider value={{ songs, onGetNextSong, onGetPrevSong,onRandomSong }}>
        {children}
      </MusicStoreContext.Provider>
    )
  }
  
  export default MusicStoreProvider
  
  