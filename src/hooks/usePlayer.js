import { useContext } from "react"
import { MusicPlayerContext } from "../contexts/MusicPlayerContext"
import { MusicStoreContext } from "../contexts/MusicStoreContext"

export const usePlayer = () => {
  const { song, isPlaying,stopMusic, togglePlay, onChangeSong } = useContext(MusicPlayerContext)
  const { onGetNextSong, onGetPrevSong } = useContext(MusicStoreContext)

  const onNextSong = () => {
    stopMusic();
    const nextSong = onGetNextSong(song)
    onChangeSong(nextSong)
  }

  const onPrevSong = () => {
    stopMusic();
    const prevSong = onGetPrevSong(song)
    onChangeSong(prevSong)
  }

  return {
    song,onNextSong, onPrevSong, isPlaying, togglePlay, stopMusic
  }
}
