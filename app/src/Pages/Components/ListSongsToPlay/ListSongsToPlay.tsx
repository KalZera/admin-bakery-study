import React, { FunctionComponent } from "react";

import { Container, ListContainer, ItemList, Timer } from "./styles";

import { Song } from "Services";

interface Props {
  Songs: Song[];
}

export const ListSongsToPlay: FunctionComponent<Props> = ({ Songs }) => {
  // CalculateTotalTime 
  const time = {minutes:0, seconds:0};
    Songs.map(song => {
      const separateMinutesForSeconds = song.duracao.split(':');
      time.seconds += parseInt(separateMinutesForSeconds[1]);
      time.minutes += parseInt(separateMinutesForSeconds[0]) + Math.floor(time.seconds / 60);
      time.seconds = (time.seconds % 60);
      return null;
    });

  return (
    <>
      <Container>
        <ListContainer>
          <Timer><p>Duração</p>  <p>{time.minutes}:{('0' + time.seconds).slice(-2) }</p></Timer>
          {Songs.map((song) => (
            <ItemList key={Math.random()}>{song.name}</ItemList>
          ))}
        </ListContainer>
      </Container>
    </>
  );
};
