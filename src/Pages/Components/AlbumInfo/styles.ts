import styled from "styled-components";

export const Content = styled.div``;

export const PhotoAlbum = styled.div<{ img?: string }>`
  height: 400px;
  max-height: 400px;
  width: 100%;
  margin: auto;
  background: red;
`;
