import styled from "styled-components";

export const Content = styled.div`
  max-height: 450px;
`;

export const PhotoAlbum = styled.div<{ img?: string }>`
  height: 200px;
  max-height: 400px;
  width: 200px;
  margin: 10px auto;
  background: red;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
