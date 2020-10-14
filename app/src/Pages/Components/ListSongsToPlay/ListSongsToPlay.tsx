import React, { FunctionComponent } from "react";

import { Container, ListContainer, ItemList } from "./styles";

import { Song } from "Services";

interface Props {
  Songs: Song[];
}

export const ListSongsToPlay: FunctionComponent<Props> = ({ Songs }) => {
  return (
    <>
      <Container>
        <ListContainer>
          {Songs.map((song) => (
            <ItemList key={Math.random()}>{song.name}</ItemList>
          ))}
        </ListContainer>
      </Container>
    </>
  );
};
