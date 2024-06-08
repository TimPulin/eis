import ButtonBase from './ButtonBase';
import DeleteIcon from '../icons/DeleteIcon';
import { css } from 'styled-components';

const buttonStyle = css`
  background-color: ${({ theme }) => theme.colors.warning_1};

  svg {
    fill: ${({ theme }) => theme.colors.warningShadow_1};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.warning_2};

    svg {
      fill: ${({ theme }) => theme.colors.warningShadow_2};
    }
  }
`;

export type ButtonDeletePropsType = {
  onClick: () => void;
};

export default function ButtonDelete(props: ButtonDeletePropsType) {
  const { onClick } = props;

  return (
    <ButtonBase
      ElementJSX={<DeleteIcon />}
      additionalStyles={buttonStyle}
      onClick={onClick}
    />
  );
}
