import React, { FunctionComponent } from "react";

import {Button} from 'Pages/Components';
import { Container } from "./styles";

interface Props {
  removeAll: () => void;
  removeLast: () => void;
}

export const GroupButtons: FunctionComponent<Props> = ({removeAll, removeLast}) => {
  return (
    <>
      <Container>
          <Button text='Apagar tudo' onClick={removeAll} />
          <Button text='Remover ultima' onClick={removeLast} />
      </Container>
    </>
  );
};
