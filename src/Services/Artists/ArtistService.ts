import axios from "axios";
import { Album } from "Services/artists.types";
// import { Album } from "Services";

const getArtists = async (): Promise<Album[]> => {
  const responseRequestGet = await axios.get("/artists");
  const { data } = responseRequestGet;
  return data;
  // return artist;
};

export const ArtistService = { getArtists };
