import React, { FunctionComponent } from "react";
import { TableAlbuns, AlbumInfo } from "Pages/Components";
import { Content } from "./styles";

interface Props {}

export const PageHome: FunctionComponent<Props> = () => {
  return (
    <>
      <Content>
        <TableAlbuns />
        <AlbumInfo />
      </Content>
    </>
  );
};
