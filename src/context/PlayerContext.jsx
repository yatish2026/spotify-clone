import { createContext, useRef, useState, useEffect } from 'react';
import { songsData } from '../assets/assets';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [trackIndex, setTrackIndex] = useState(0);
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false); // ✅ Boolean, not string
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 }
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const nextTrack = () => {
    const newIndex = (trackIndex + 1) % songsData.length;
    setTrackIndex(newIndex);
    setTrack(songsData[newIndex]);
    setPlayStatus(true);
  };

  const prevTrack = () => {
    const newIndex = (trackIndex - 1 + songsData.length) % songsData.length;
    setTrackIndex(newIndex);
    setTrack(songsData[newIndex]);
    setPlayStatus(true);
  };

  // When track changes, update the audio source
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = track.file;
      if (playStatus) {
        audioRef.current.play();
      }
    }
  }, [track]);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    nextTrack,
    prevTrack
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
      <audio ref={audioRef} />
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
