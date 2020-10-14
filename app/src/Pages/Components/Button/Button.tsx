import React, {FunctionComponent} from "react";

import {Content} from './styles'

interface Props {
  onClick:() => void;
  text:string;
}

export const Button: FunctionComponent<Props> = ({onClick, text}) => {
   return <Content onClick={onClick}>
     {text}
   </Content>;
};