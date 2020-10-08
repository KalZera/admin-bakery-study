import styled from "styled-components";

export const Album = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  background: purple;
  // width: 250px;
  // height: 250px;
  margin: 5px;
`;

export const AlbumCollection = styled.div`
  background: blue;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2, 50%);
`;
