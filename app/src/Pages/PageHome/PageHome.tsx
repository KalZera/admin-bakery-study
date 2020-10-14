import React, { FunctionComponent } from "react";
import { Formik } from "formik";

import { FormAlbuns, FormList } from "Pages/Components";
import { Content } from "./styles";

import { ArtistService, Song } from "Services";
import { useRequest } from "Hooks";

interface Props {}

interface FormOptions {
  album: number;
  songsToPlay: Song[];
  // songsToPlay: string[];
}

export const PageHome: FunctionComponent<Props> = () => {
  const initialValues: FormOptions = {
    album: 1,
    songsToPlay: [],
  };

  const [, , Artists] = useRequest(ArtistService.getArtists);

  if (!Artists) {
    return null;
  }

  return (
    <>
      <Formik validateOnMount initialValues={initialValues} onSubmit={() => {}}>
        {({ values, setFieldValue }) => {
          const FunctionsForm =  {
          addSong:(song: Song) => {
            const arraySongs = [...values.songsToPlay, song];
            setFieldValue("songsToPlay", arraySongs);
          },
          removeAll:() => {
            setFieldValue("songsToPlay", []);
          },
          removeLast:() =>{
            values.songsToPlay.pop();
            setFieldValue("songsToPlay", values.songsToPlay);
          }};
          return (
            <Content>
              <FormAlbuns albumSelected={values.album} />
              <FormList
                albumSelected={values.album}
                songsSelected={values.songsToPlay}
                functions={FunctionsForm}
              />
            </Content>
          );
        }}
      </Formik>
    </>
  );
};
