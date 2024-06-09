import { createContext, useContext, useMemo, useState } from 'react';

type MessageType = {
  id: number;
  textMessage: string;
};

type MessageContextType = {
  messageList: Array<MessageType>;
  addMessage: (text: string) => void;
};

const initialState = {
  messageList: [],
  addMessage: () => {},
};

const MessageContext = createContext<MessageContextType>(initialState);

export function MessageProvider({ children }: { children: React.ReactNode }) {
  const [messageList, setMessageList] = useState<Array<MessageType>>([]);

  const addMessage = (text: string) => {
    const id = Date.now();
    setMessageList([...messageList, { id: id, textMessage: text }]);

    setTimeout(() => {
      setMessageList(messageList.filter((message) => message.id !== id));
    }, 3000);
  };

  const messageState = useMemo(
    () => ({ messageList, addMessage }),
    [messageList, addMessage]
  );

  return (
    <MessageContext.Provider value={messageState}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  return useContext(MessageContext);
}
