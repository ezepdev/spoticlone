import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { getToplists } from "@/services";

export const Playlists = ({ render }) => {
  const [playlists, setPlaylists] = useState([]);
  const access_token = useAuth();

  useEffect(() => {
    getToplists(access_token).then((toplists) => setPlaylists(toplists.items));
  }, []);

  if (playlists === []) return <h1>Cargando</h1>;

  return render({ playlists });
};
