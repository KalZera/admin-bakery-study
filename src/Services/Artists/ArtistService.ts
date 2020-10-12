import axios from "axios";
import { Album } from "Services/artists.types";
// import { Album } from "Services";

const getArtists = async (): Promise<Album[]> => {
  const listArtist = await axios.get("/artists");
  const { data } = listArtist;
  return data;
  // return artist;
};

const get = async (idAlbum: number): Promise<Album> => {
  const Artist = await axios.get(`/artists/${idAlbum}`);
  const { data } = Artist;
  return data;
  // return artist;
};

export const ArtistService = { getArtists, get };
