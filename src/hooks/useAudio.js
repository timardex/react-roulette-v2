import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const useAudio = url => {
  const enableSounds = useSelector(state => state.enableSounds);
  
  const [audio] = useState(new Audio(url));
  const [audioPlaying, setPlaying] = useState(false);

  const audioToggle = () => setPlaying(!audioPlaying);
  
  useEffect(() => {
    audioPlaying ? audio.play() : audio.pause();
    audio.volume = enableSounds ? 1 : 0;
  }, [audioPlaying, audio, enableSounds]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  });

  return [audioPlaying, audioToggle];
};

export default useAudio;