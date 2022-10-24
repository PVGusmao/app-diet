import { Routes } from '@routes/index';
import theme from './src/theme';

import Loading from '@components/Loading';

import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const fonts = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {
        fonts ? <Routes /> : <Loading />
      }
    </ThemeProvider>
  );
}
