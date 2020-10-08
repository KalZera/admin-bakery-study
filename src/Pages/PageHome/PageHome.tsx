import React, { FunctionComponent } from "react";
import { TableAlbuns, AlbumInfo, ListSong } from "Pages/Components";
import { Content, Lists, Choose } from "./styles";
import data from "db.json";

interface Props {}

export const PageHome: FunctionComponent<Props> = () => {
  console.log(data);
  return (
    <>
      <Content>
        <Choose>
          <TableAlbuns artists={data.artists} />
          <AlbumInfo />
        </Choose>
        <Lists>
          <ListSong />
          <ListSong />
          <ListSong />
        </Lists>
      </Content>
    </>
  );
};
