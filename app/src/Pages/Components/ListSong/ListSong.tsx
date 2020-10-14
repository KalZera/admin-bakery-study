import React, { FunctionComponent } from "react";

import { Container, ListContainer, ItemList } from "./styles";

import { ArtistService, Song } from "Services";
import { useRequest } from "Hooks";

interface Props {
  albumId?: number;
  addSong: (song: Song) => void;
}

export const ListSong: FunctionComponent<Props> = ({ albumId, addSong }) => {
  const [loading, , Songs] = useRequest(ArtistService.getSongsAlbum, albumId);

  if (loading || !Songs) {
    return (
      <Container>
        <ListContainer>
          <ItemList>Selecione uma banda</ItemList>
        </ListContainer>
      </Container>
    );
  }
  return (
    <>
      <Container>
        <ListContainer>
          {Songs.map((song, key) => (
            <ItemList key={key} onClick={() => addSong(song)}>
              {song.name}
            </ItemList>
          ))}
        </ListContainer>
      </Container>
    </>
  );
};
