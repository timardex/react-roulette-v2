import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const useAudio = url => {
  const enableSounds = useSelector(state => state.enableSounds);
  
  const [audio] = useState(new Audio(url));
  const [audioPlaying, setPlaying] = useState(false);

  const audioToggle = () => setPlaying(!audioPlaying);

  useEffect(() => {
    audioPlaying && enableSounds ? audio.play() : audio.pause();
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