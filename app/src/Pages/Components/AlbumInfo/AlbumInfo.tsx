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
    return (
      <Content>
        <p> Informações do disco não foram selecionadas</p>
      </Content>
    );
  }

  return (
    <>
      <Content>
        <PhotoAlbum img={Artist.photo} />
        <p> Informações do disco</p>
        <p> Artista (s): {Artist.artist}</p>
        <p> Nome do Album: {Artist.album}</p>
        <p> Lançado em {Artist.year}</p>
        <p> {Artist.songs.length} faixa(s)</p>
      </Content>
    </>
  );
};
