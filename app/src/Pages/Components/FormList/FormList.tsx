import React, { FunctionComponent } from "react";

import { ListSong, ListSongsToPlay, GroupButtons } from "Pages/Components";
import { Lists } from "./styles";

import { Song } from "Services";

interface Props {
  albumSelected: number;
  songsSelected: Song[];
  addSong: (song: Song) => void;
}

export const FormList: FunctionComponent<Props> = ({
  albumSelected,
  songsSelected,
  addSong,
}) => {
  return (
    <>
      <Lists>
        <ListSong albumId={albumSelected} addSong={addSong} />
        <GroupButtons />
        <ListSongsToPlay Songs={songsSelected} />
      </Lists>
    </>
  );
};
