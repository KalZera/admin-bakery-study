import React, { FunctionComponent } from "react";

import { ListSong, ListSongsToPlay, GroupButtons } from "Pages/Components";
import { Lists } from "./styles";

import { Song } from "Services";

interface Functions {
  addSong: (song: Song) => void;
  removeAll: () => void;
  removeLast: () => void;
}

interface Props {
  albumSelected: number;
  songsSelected: Song[];
  functions: Functions;
}

export const FormList: FunctionComponent<Props> = ({
  albumSelected,
  songsSelected,
  functions,
}) => {
  return (
    <>
      <Lists>
        <ListSong albumId={albumSelected} addSong={functions.addSong} />
        <GroupButtons
          removeAll={functions.removeAll}
          removeLast={functions.removeLast}
        />
        <ListSongsToPlay Songs={songsSelected} />
      </Lists>
    </>
  );
};
