import styled from "styled-components";

export const Album = styled.button<{ img: string }>`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // background: purple;
  // width: 250px;
  // height: 250px;
  margin: 5px;
`;

export const AlbumCollection = styled.div`
  background: blue;
  width: 900px;
  height: 450px;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2, 50%);
`;
