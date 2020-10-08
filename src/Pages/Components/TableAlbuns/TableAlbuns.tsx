import React, { FunctionComponent } from "react";
import { Album, AlbumCollection } from "./styled";

import { Album as IAlbum } from "Services";

interface Props {
  artists: IAlbum[];
}

export const TableAlbuns: FunctionComponent<Props> = ({ artists }) => {
  console.log(artists);
  return (
    <>
      <AlbumCollection>
        <Album img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-1568449257-cd-album-japons-pop-v6-since-1995-forever-jpop-_JM&psig=AOvVaw2O5l2z8iU6L9dARmc1IJHs&ust=1602098715925000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj27_nYoOwCFQAAAAAdAAAAABAD" />
        <Album img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-1568449257-cd-album-japons-pop-v6-since-1995-forever-jpop-_JM&psig=AOvVaw2O5l2z8iU6L9dARmc1IJHs&ust=1602098715925000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj27_nYoOwCFQAAAAAdAAAAABAD" />
        <Album img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-1568449257-cd-album-japons-pop-v6-since-1995-forever-jpop-_JM&psig=AOvVaw2O5l2z8iU6L9dARmc1IJHs&ust=1602098715925000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj27_nYoOwCFQAAAAAdAAAAABAD" />
        <Album img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-1568449257-cd-album-japons-pop-v6-since-1995-forever-jpop-_JM&psig=AOvVaw2O5l2z8iU6L9dARmc1IJHs&ust=1602098715925000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj27_nYoOwCFQAAAAAdAAAAABAD" />
        <Album img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-1568449257-cd-album-japons-pop-v6-since-1995-forever-jpop-_JM&psig=AOvVaw2O5l2z8iU6L9dARmc1IJHs&ust=1602098715925000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj27_nYoOwCFQAAAAAdAAAAABAD" />
        <Album img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-1568449257-cd-album-japons-pop-v6-since-1995-forever-jpop-_JM&psig=AOvVaw2O5l2z8iU6L9dARmc1IJHs&ust=1602098715925000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj27_nYoOwCFQAAAAAdAAAAABAD" />
      </AlbumCollection>
    </>
  );
};
