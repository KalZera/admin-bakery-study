import { useEffect } from "react";

interface Props {}

export const useSelectAlbum = () => {
  const album: string = "teste";
  useEffect((): void => {
    // return album;
  }, [album]);
};
