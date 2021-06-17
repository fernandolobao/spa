import styled from 'styled-components';
import { DesignToken } from '../../Style';

console.log('aqui');

export const StyledProfile = styled.div.attrs({ className: 'profile'})`
  background-color: ${DesignToken('$primary-medium')}
`;
