import styled from "styled-components";

import { colors } from "Styles/colors";

export const Container = styled.div`
  background: ${colors.second};
  border: 1px solid ${colors.white};
  display: grid;
  padding-top: 30px;
  grid-template-rows: 100px 100px;
`;
