export interface Album {
  id: number;
  artist: string;
  album: string;
  year: number;
  photo: string;
  songs: Song[];
}

export interface Song {
  name: string;
  type: string;
  duracao: string;
}
