import { createContext, useState } from "react";

export const PlaybackContext = createContext({});

export const PlaybackProvider = ({ children, value = {} }) => {
  const [playback, setPlayback] = useState(value);

  return (
    <PlaybackContext.Provider value={{ playback, setPlayback }}>
      {children}
    </PlaybackContext.Provider>
  );
};
