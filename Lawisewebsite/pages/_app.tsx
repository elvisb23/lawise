import { AppProps } from 'next/app';
import '../src/app/globals.css'; // Adjust the path according to your project structure
import ChatWidget from './chatwidget';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Component {...pageProps} />
  <ChatWidget />
  </>
  );
}

export default MyApp;