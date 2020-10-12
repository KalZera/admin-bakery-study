import React, { FunctionComponent } from "react";

import { ListSong } from "Pages/Components";
import { Lists } from "./styles";

interface Props {
  albumSelected: number;
}

export const FormList: FunctionComponent<Props> = ({ albumSelected }) => {
  return (
    <>
      <Lists>
        <ListSong albumId={albumSelected} />
        <div />
        <div />
      </Lists>
    </>
  );
};
