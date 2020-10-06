import styled from "styled-components";

export const Content = styled.div`
  display:grid;
  grid-template-row:
    0.8fr; //foto album
    0.2fr; //informações do album
`;

export const PhotoAlbum = styled.div<{ img?: string }>`
  // display: grid;
  height: 400px;
  width: 400px;
  background: red;
`;
