import 'styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import Header from 'components/Header.js';
import HeaderTwo from 'components/HeaderTwo.js';
import 'prismjs/themes/prism-tomorrow.css';

const components = {
  h1: Header,
  h2: HeaderTwo,
};

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
