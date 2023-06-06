import Head from 'next/head';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles';
import NavBar from 'components/common/NavBar';
import AppLayout from 'components/common/layout/AppLayout';
import Footer from 'components/common/Footer';
import styled from '@emotion/styled';
import Breadcrumbs from 'components/common/Breadcrumb';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import React from 'react';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const ContentBox = styled.div``;

const darkThme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MuiThemeProvider theme={darkThme}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Container>
            <NavBar />
            <ContentBox>
              <AppLayout>
                <Breadcrumbs />
                <Component {...pageProps} />
              </AppLayout>
            </ContentBox>
            <Footer />
          </Container>
        </ThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}
