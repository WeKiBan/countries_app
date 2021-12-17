import { useState } from 'react';
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig';

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark((prevState) => !prevState);
    console.log(dark);
  };
  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Layout dark={dark} toggleTheme={toggleTheme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
