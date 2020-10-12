import React, { FunctionComponent } from "react";
import { Formik, Form } from "formik";

import { TableAlbuns, Arrow, AlbumInfo } from "Pages/Components";
import { Choose } from "./styles";

import { ArtistService } from "Services";
import { useRequest } from "Hooks";

interface Props {}

export const FormAlbuns: FunctionComponent<Props> = () => {
  const initialValues = {
    album: "1",
  };

  const [, , Artists] = useRequest(ArtistService.getArtists);

  if (!Artists) {
    return null;
  }
  // const next = (submit: () => void) => (
  //   event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   if (!!event) {
  //     event.preventDefault();
  //   }
  //   submit();
  // };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
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
