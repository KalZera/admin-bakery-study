import React, { FunctionComponent } from "react";

import { Container, ListContainer, ItemList } from "./styles";

import { ArtistService, Song } from "Services";
import { useRequest } from "Hooks";

interface Props {
  albumId?: number;
  addSong: (song: Song) => void;
}

export const ListSong: FunctionComponent<Props> = ({ albumId, addSong }) => {
  const [, , Songs] = useRequest(ArtistService.getSongsAlbum, albumId);

  if (!Songs) {
    return null;
  }

  return (
    <>
      <Container>
        <ListContainer>
          {Songs.map((song) => (
            <ItemList key={song.name} onClick={() => addSong(song)}>
              {song.name}
            </ItemList>
          ))}
        </ListContainer>
      </Container>
    </>
  );
};
