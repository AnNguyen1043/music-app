import { useContext } from "react"
import { MusicPlayerContext } from "../contexts/MusicPlayerContext"
import { MusicStoreContext } from "../contexts/MusicStoreContext"

export const usePlayer = () => {
  const { song, isPlaying,stopMusic, togglePlay, onChangeSong } = useContext(MusicPlayerContext)
  const { onGetNextSong, onGetPrevSong } = useContext(MusicStoreContext)

  const onNextSong = () => {
    stopMusic();
    const nextSong = onGetNextSong(song)
    console.log('next song: ', nextSong)
    onChangeSong(nextSong)
  }

  const onPrevSong = () => {
    stopMusic();
    const prevSong = onGetPrevSong(song)
    console.log('prev song: ', prevSong)
    onChangeSong(prevSong)
  }

  return {
    song,onNextSong, onPrevSong, isPlaying, togglePlay, stopMusic
  }
}
