import React, { FunctionComponent } from "react";
import { Formik } from "formik";

import { FormAlbuns, FormList } from "Pages/Components";
import { Content } from "./styles";

import { ArtistService } from "Services";
import { useRequest } from "Hooks";

interface Props {}

interface FormOptions {
  album: number;
}

export const PageHome: FunctionComponent<Props> = () => {
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
            <Content>
              <FormAlbuns albumSelected={values.album} />
              <FormList albumSelected={values.album} />
            </Content>
          );
        }}
      </Formik>
    </>
  );
};
