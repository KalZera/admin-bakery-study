import React, { FunctionComponent } from "react";
import { Album, AlbumCollection, InputContainer, RadioButton } from "./styled";
import { useField } from "formik";

import { Album as IAlbum } from "Services";

interface Props {
  artists: IAlbum[];
}

export const TableAlbuns: FunctionComponent<Props> = ({ artists }) => {
  const [field] = useField("album");
  return (
    <>
      <AlbumCollection>
        {artists.map((album) => (
          <InputContainer key={album.id}>
            <RadioButton
              {...field}
              type="radio"
              value={album.id}
              checked={album.id === parseInt(field.value)}
            />
            <Album img={album.photo} />
          </InputContainer>
        ))}
      </AlbumCollection>
    </>
  );
};
