import { useContext } from "react";
import { PlaybackContext } from "@/contexts/Playback";

export const usePlayer = () => {
  const { playback, setPlayback } = useContext(PlaybackContext);
  const { playingTrack } = playback;
  const { isPlaying } = playback;

  const setPlayingTrack = (track) =>
    setPlayback((oldState) => ({
      ...oldState,
      playingTrack: track,
    }));

  const setIsPlaying = (isPlaying) => {
    setPlayback((oldState) => ({
      ...oldState,
      isPlaying: isPlaying,
    }));
  };

  return { playingTrack, setPlayingTrack, setIsPlaying, isPlaying };
};
