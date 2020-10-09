export interface Album {
  hashId: string | number;
  artist: string;
  album: string;
  year: number;
  photo: string;
  songs: Song[];
}

export interface Song {
  name: string;
  type: string;
  address: string;
  link?: string;
}
