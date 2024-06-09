import { MessageProvider } from './contexts/MessageContext';
import { theme } from './styles/theme';
import MeterPage from './pages/MeterPage';
import { ThemeProvider } from 'styled-components';
import MessageList from './components/message/MessageList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MessageProvider>
        <MeterPage />
        <MessageList />
      </MessageProvider>
    </ThemeProvider>
  );
}

export default App;
