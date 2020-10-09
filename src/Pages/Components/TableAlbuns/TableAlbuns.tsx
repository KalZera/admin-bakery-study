import React, { FunctionComponent } from "react";
import { Album, AlbumCollection } from "./styled";

import { Album as IAlbum } from "Services";

interface Props {
  artists: IAlbum[];
}

export const TableAlbuns: FunctionComponent<Props> = ({ artists }) => {
  return (
    <>
      <AlbumCollection>
        {artists.map((album) => (
          <Album key={album.year} img={album.photo} />
        ))}
        <Album img="https://images-na.ssl-images-amazon.com/images/I/71Iw18bODyL._AC_SX425_.jpg" />
        <Album img="https://images-na.ssl-images-amazon.com/images/I/71Iw18bODyL._AC_SX425_.jpg" />
        <Album img="https://images-na.ssl-images-amazon.com/images/I/71Iw18bODyL._AC_SX425_.jpg" />
      </AlbumCollection>
    </>
  );
};
