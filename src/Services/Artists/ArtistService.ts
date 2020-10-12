import axios from "axios";
import { Album, Song } from "Services/artists.types";
// import { Album } from "Services";

const getArtists = async (): Promise<Album[]> => {
  const listArtist = await axios.get("/artists");
  const { data } = listArtist;
  return data;
};

const get = async (idAlbum: number): Promise<Album> => {
  const Artist = await axios.get(`/artists/${idAlbum}`);
  const { data } = Artist;
  return data;
};

const getSongsAlbum = async (idAlbum: number): Promise<Song[]> => {
  const Artist = await axios.get(`/artists/${idAlbum}`);
  const { songs } = Artist.data;
  return songs;
};

export const ArtistService = { getArtists, get, getSongsAlbum };
