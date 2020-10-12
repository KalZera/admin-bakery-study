import React, { FunctionComponent } from "react";
import { ListSong, FormAlbuns } from "Pages/Components";
import { Content, Lists } from "./styles";

interface Props {}

export const PageHome: FunctionComponent<Props> = () => {
  return (
    <>
      <Content>
        <FormAlbuns />
        <Lists>
          <ListSong />
          <ListSong />
          <ListSong />
        </Lists>
      </Content>
    </>
  );
};
