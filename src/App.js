import React, { useContext } from 'react'
import MusicStoreProvider, { MusicStoreContext } from './contexts/MusicStoreContext'
import MusicPlayerProvider, { MusicPlayerContext } from './contexts/MusicPlayerContext'
import { usePlayer } from './hooks/usePlayer'
import "./style.scss"


function App() {
  return (
    <MusicStoreProvider>
      <div className='audio-wrapper'>
      <MusicPlayerProvider>
        <ListMusic />
        <MusicController />
      </MusicPlayerProvider>
      </div>
    </MusicStoreProvider>
  )
}

const MusicController = () => {
  const { song, onNextSong, onPrevSong, isPlaying, togglePlay} = usePlayer()

  return (
    <div className="music-controller">
      <h3>{song?.name}</h3>

      <div className='music-controller-buttons'>
        <button onClick={onPrevSong}>Back</button>

        <button onClick={togglePlay}>
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button onClick={onNextSong}>Next</button>
      </div>
    </div>
  )
}

const ListMusic = () => {
  const { onChangeSong, stopMusic } = useContext(MusicPlayerContext)
  const { songs } = useContext(MusicStoreContext)
  console.log("songs");
  return (
    <div className="list-music">
      {songs.map((song) => (
        // console.log(song.name)
        <div key={song.id} onClick={() => {
          stopMusic();
          onChangeSong(song)
        }}>
          {song.name}
        </div>
      ))}
    </div>
  )
}

export default App
