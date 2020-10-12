import styled from "styled-components";

export const Container = styled.div`
  background: yellow;
`;

export const ListContainer = styled.div`
  background: green;
  display: flex;
  flex-direction: column;
`;

export const ItemList = styled.button`
  background: pink;
  padding: 10px;

  &:hover {
    background: white;
  }
`;
