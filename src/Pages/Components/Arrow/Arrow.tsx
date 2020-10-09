import React, { FunctionComponent } from "react";

import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";

import { Button } from "./styles";

interface Props {
  direction: "left" | "right";
}

export const Arrow: FunctionComponent<Props> = ({ direction }) => {
  switch (direction) {
    case "right":
      return (
        <Button>
          <VscChevronRight />
        </Button>
      );
    case "left":
    default:
      return (
        <Button>
          <VscChevronLeft />
        </Button>
      );
  }
};
