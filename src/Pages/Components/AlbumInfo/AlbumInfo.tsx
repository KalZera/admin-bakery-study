import React, { FunctionComponent } from "react";
import { PhotoAlbum, Content } from "./styles";
interface Props {}

export const AlbumInfo: FunctionComponent<Props> = () => {
  return (
    <>
      <Content>
        <PhotoAlbum img="" />
        <p> informações do disco</p>
        <p> album de 2000</p>
        <p> banda Charlie brown Jr</p>
        <p> album Só os loucos sabem</p>
      </Content>
    </>
  );
};
