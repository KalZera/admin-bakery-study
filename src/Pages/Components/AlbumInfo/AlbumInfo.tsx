import React, { FunctionComponent } from "react";
import { PhotoAlbum, Content } from "./styles";
interface Props {
  albumSelected: string;
}

export const AlbumInfo: FunctionComponent<Props> = ({ albumSelected }) => {
  console.log(albumSelected);
  return (
    <>
      <Content>
        <PhotoAlbum img="" />
        <p> informações do disco</p>
        <p> album de 2000</p>
        <p> banda Charlie brown Jr</p>
        <p> album Só os loucos sabem</p>
        <p> 12 faixas</p>
      </Content>
    </>
  );
};
