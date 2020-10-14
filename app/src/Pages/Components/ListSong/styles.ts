import styled from "styled-components";

import { colors } from "Styles/colors";

export const Container = styled.div`
  background: ${colors.second};
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemList = styled.button`
  background: ${colors.second};
  color: ${colors.first};
  padding: 10px;
  border: none;
  font-size: 16px;

  &:hover {
    background: ${colors.first};
    color: white;
  }
`;
