import styled from 'styled-components';

export const H1 = styled.h1`
  margin-bottom: 1rem;
  text-align: left;
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;
