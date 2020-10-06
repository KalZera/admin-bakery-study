import React, { FunctionComponent } from "react";
import { ContainerStyle } from "./styles";

interface Props {
  children: JSX.Element;
}

export const Container: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <ContainerStyle>{children}</ContainerStyle>
    </>
  );
};
