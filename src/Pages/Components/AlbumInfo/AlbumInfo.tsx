import React, { FunctionComponent } from "react";
import { PhotoAlbum, Content } from "./styles";

import { ArtistService } from "Services";
import { useRequest } from "Hooks";

interface Props {
  albumSelected: number;
}

export const AlbumInfo: FunctionComponent<Props> = ({ albumSelected }) => {
  const [, , Artist] = useRequest(ArtistService.get, albumSelected);

  if (!Artist?.id) {
    return null;
  }

  return (
    <>
      <Content>
        <PhotoAlbum img={Artist.photo} />
        <p> informações do disco</p>
        <p> album de {Artist.year}</p>
        <p> {Artist.artist}</p>
        <p> album {Artist.album}</p>
        <p> {Artist.songs.length} faixa(s)</p>
      </Content>
    </>
  );
};
