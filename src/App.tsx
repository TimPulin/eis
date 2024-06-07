import './styles/basic-style.css';
import { theme } from './styles/theme';
import MeterPage from './pages/MeterPage';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MeterPage />
    </ThemeProvider>
  );
}

export default App;
