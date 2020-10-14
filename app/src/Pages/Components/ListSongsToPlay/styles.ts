import styled from "styled-components";
import { colors } from "Styles/colors";

export const Container = styled.div`
  background: ${colors.second};
`;

export const ListContainer = styled.div`
  background: ${colors.supportFirst};
`;

export const ItemList = styled.div`
  background: ${colors.first};
  color: ${colors.white};
  padding: 10px;
  font-size: 16px;
`;

export const Timer = styled.div`
  background: ${colors.brandPrimary};
  colot: ${colors.first};
  display:flex;
  padding: 10px;
  font-size: 16px;
  justify-content: space-between;

  p{
    font-weight: bold;
    margin: 0;
  }
`;
