import '../styles/globals.scss'
import React, { FC } from "react";
import { Provider, useDispatch } from "react-redux";
import type { AppProps } from 'next/app'
import { makeStore, wrapper } from '../redux/store'
import Layout from '../components/Layout/Layout'
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../styles/components/theme';

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;


// function App({ Component, pageProps }: AppProps) {
//   // const { store, props } = wrapper.useWrappedStore(rest);

//   return (
//     // <Provider store={store} >
//     <ThemeProvider theme={baseTheme}>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </ThemeProvider>
//     // </Provider>
//   )
// }
// export default wrapper.withRedux(App);


// const App: FC<AppProps> = ({ Component, ...rest }) => {
//   const { store, props } = wrapper.useWrappedStore(rest);

//   return (
//     <Provider store={store} >
//       <ThemeProvider theme={baseTheme}>
//         <Layout>
//           <Component {...props.pageProps} />
//         </Layout>
//       </ThemeProvider>
//     </Provider>
//   )
// }
// export default App;

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }