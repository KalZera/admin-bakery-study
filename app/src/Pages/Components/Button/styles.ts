import styled from 'styled-components';

import {colors} from 'Styles/colors'

export const Content = styled.button`
    border:none;
    margin-bottom: 30px;  
    cursor:pointer;
    
    &:hover{
      background:${colors.third}
    }
`;
