import { useMessage } from '../../contexts/MessageContext';
import Message from './Message';
import { StyledMessageList } from './message-styles';

export default function MessageList() {
  const { messageList } = useMessage();

  return (
    <StyledMessageList>
      {messageList.map((message) => (
        <Message key={message.id} text={message.textMessage} />
      ))}
    </StyledMessageList>
  );
}
