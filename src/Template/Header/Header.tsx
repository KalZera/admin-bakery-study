import React, { FunctionComponent } from "react";
import { HeaderBody } from "./styled";
interface Props {}

export const Header: FunctionComponent<Props> = () => {
  return (
    <HeaderBody>
      <h1>logo</h1>
    </HeaderBody>
  );
};
