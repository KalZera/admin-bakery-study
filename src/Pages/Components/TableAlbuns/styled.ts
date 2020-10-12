import styled from "styled-components";

export const Album = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;

export const AlbumCollection = styled.div`
  background: blue;
  width: 900px;
  height: 450px;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2, 50%);
`;

export const InputContainer = styled.div`
  position: relative;
  padding: 5px;
`;

export const RadioButton = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  // margin: 0;
  cursor: pointer;

  //active tile styles
  &:checked + ${Album} {
    border: 2px solid white;
  }
`;
