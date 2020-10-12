import React, { FunctionComponent } from "react";

import { Container } from "./styles";

interface Props {
  albumId?: number;
}

export const ListSong: FunctionComponent<Props> = ({ albumId }) => {
  console.log(albumId);
  return (
    <>
      <Container>
        <p>faixa 1 </p>
      </Container>
    </>
  );
};
