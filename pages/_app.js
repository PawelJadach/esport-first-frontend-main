import { Provider } from 'react-redux';
import '../styles/normalize.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/slick.scss';
import store from '../store';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: '#43702C',
        dark: '#000',
        textLight: '#fff',
    },
}

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Nunito', sans-serif;
        font-weight: 900;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #ffffff;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Nunito', sans-serif;
    }
`

const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp;
