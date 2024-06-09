import { StyledMessage } from './message-style';

type MessagePropsType = {
  text: string;
};

export default function Message(props: MessagePropsType) {
  const { text } = props;
  return (
    <StyledMessage>
      <h3>Сообщение</h3>
      <p>{text}</p>
    </StyledMessage>
  );
}
