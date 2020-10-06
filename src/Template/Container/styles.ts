import styled from "styled-components";

export const ContainerStyle = styled.div`
  margin-top: 64px;
  width: 100%;
  padding-right: 0;
  padding-left: 0;
  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
