import React, { FunctionComponent } from "react";

import { Container } from "./styles";

interface Props {
  songs?: string[];
}

export const ListSong: FunctionComponent<Props> = ({ songs }) => {
  console.log(songs);
  return (
    <>
      <Container>
        <p>faixa 1 </p>
      </Container>
    </>
  );
};
