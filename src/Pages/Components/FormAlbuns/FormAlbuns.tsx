import React, { FunctionComponent } from "react";
import { Formik, Form } from "formik";

import { TableAlbuns, Arrow, AlbumInfo } from "Pages/Components";
import { Choose } from "./styles";

import { ArtistService } from "Services";
import { useRequest } from "Hooks";

interface Props {}

interface FormOptions {
  album: number;
}

export const FormAlbuns: FunctionComponent<Props> = () => {
  const initialValues: FormOptions = {
    album: 1,
  };

  const [, , Artists] = useRequest(ArtistService.getArtists);

  if (!Artists) {
    return null;
  }
  return (
    <>
      <Formik validateOnMount initialValues={initialValues} onSubmit={() => {}}>
        {({ values }) => {
          return (
            <Form>
              <Choose>
                <Arrow direction="left" />
                <TableAlbuns artists={Artists} />
                <Arrow direction="right" />
                <AlbumInfo albumSelected={values.album} />
              </Choose>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
