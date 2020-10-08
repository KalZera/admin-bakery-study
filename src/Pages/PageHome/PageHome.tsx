import React, { FunctionComponent } from "react";
import { TableAlbuns, AlbumInfo, ListSong } from "Pages/Components";
import { Content, Lists, Choose } from "./styles";

interface Props {}

export const PageHome: FunctionComponent<Props> = () => {
  return (
    <>
      <Content>
        <Choose>
          <TableAlbuns />
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
