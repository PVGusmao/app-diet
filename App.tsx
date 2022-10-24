import Home from '@screens/Home';
import theme from './src/theme';

import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Loading from '@components/Loading';

export default function App() {
  const fonts = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {
        fonts ? <Home /> : <Loading />
      }
    </ThemeProvider>
  );
}
