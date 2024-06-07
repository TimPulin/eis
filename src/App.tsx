import './styles/basic-style.css';
import { theme } from './styles/theme';
import CounterPage from './pages/CounterPage';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CounterPage />
    </ThemeProvider>
  );
}

export default App;
