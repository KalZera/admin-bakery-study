import React, { FunctionComponent } from "react";

import { TableAlbuns, Arrow, AlbumInfo } from "Pages/Components";
import { Choose } from "./styles";

import { ArtistService } from "Services";
import { useRequest } from "Hooks";

interface Props {
  albumSelected: number;
}

export const FormAlbuns: FunctionComponent<Props> = ({ albumSelected }) => {
  const [, , Artists] = useRequest(ArtistService.getArtists);

  if (!Artists) {
    return null;
  }

  return (
    <>
      <Choose>
        <Arrow direction="left" />
        <TableAlbuns artists={Artists} />
        <Arrow direction="right" />
        <AlbumInfo albumSelected={albumSelected} />
      </Choose>
    </>
  );
};
