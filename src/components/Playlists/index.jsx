import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { getToplists } from "@/services";

export const Playlists = ({ render }) => {
  const access_token = useAuth();
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getToplists(access_token)
      .then((toplists) => setPlaylists(toplists.items))
      .catch(() => setError(true));
  }, []);

  if (error) return <Navigate to="/login" />;
  if (playlists === []) return <h1>Cargando</h1>;

  return render({ playlists });
};
