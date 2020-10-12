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
          const addSong = (song: Song) => {
            console.log(song);
            const arraySongs = [...values.songsToPlay, song];
            console.log(arraySongs);
            setFieldValue("songsToPlay", arraySongs);
          };
          return (
            <Content>
              <FormAlbuns albumSelected={values.album} />
              <FormList
                albumSelected={values.album}
                songsSelected={values.songsToPlay}
                addSong={addSong}
              />
            </Content>
          );
        }}
      </Formik>
    </>
  );
};
