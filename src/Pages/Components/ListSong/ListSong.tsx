import React, { FunctionComponent } from "react";

import { Container, ListContainer, ItemList } from "./styles";

import { ArtistService } from "Services";
import { useRequest } from "Hooks";

interface Props {
  albumId?: number;
}

export const ListSong: FunctionComponent<Props> = ({ albumId }) => {
  const [, , Songs] = useRequest(ArtistService.getSongsAlbum, albumId);

  if (!Songs) {
    return null;
  }
  return (
    <>
      <Container>
        <ListContainer>
          {Songs.map((song) => (
            <ItemList key={song.name}>{song.name}</ItemList>
          ))}
        </ListContainer>
      </Container>
    </>
  );
};
