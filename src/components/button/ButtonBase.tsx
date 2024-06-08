import { ReactElement } from 'react';
import styled, { CSSProp } from 'styled-components';
import { buttonStyle } from '../../styles/button';

type ButtonProps = {
  '$additional-styles'?: CSSProp;
};

const Button = styled.button<ButtonProps>`
  ${buttonStyle}
  padding-block: 8px;
  ${({ '$additional-styles': additionalStyles }) =>
    additionalStyles && additionalStyles}
`;

type ButtonBasePropsType = {
  ElementJSX?: ReactElement;
  additionalStyles?: CSSProp;
  onClick: () => void;
};

export default function ButtonBase(props: ButtonBasePropsType) {
  const { ElementJSX, additionalStyles, onClick } = props;
  return (
    <Button
      $additional-styles={additionalStyles}
      type="button"
      onClick={onClick}
    >
      {ElementJSX}
    </Button>
  );
}
