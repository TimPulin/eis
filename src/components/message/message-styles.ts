import styled from 'styled-components';
import { resetStyle } from '../../styles/reset';

export const StyledMessageList = styled.ul`
  ${resetStyle}
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  border-radius: 10px;
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

export const StyledMessage = styled.li`
  ${resetStyle}
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundAccentShadow};

  h3 {
    margin: 0;
  }
`;
