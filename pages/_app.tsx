import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

import Loader from '@/components/Loader';
import { ThemeProvider } from '@/context/ThemeContext';
import { WalletClientProvider } from '@/context/WalletClientContext';
import '@/styles/globals.scss';

const ENABLE_TRANSITIONS_DELAY = 300;

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        setLoading(false);
      });
    };
  }, []);

  /* 
  This useEffect hook removes the 'preload' class from the document.body
  element after a delay of ENABLE_TRANSITIONS_DELAY milliseconds to enable
  transitions on all elements on the page. The 'preload' class was added
  to temporarily remove transitions from all elements on the page to ensure
  a smooth initial loading experience for the user.
  */
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        document.body.classList.remove('preload');
      }, ENABLE_TRANSITIONS_DELAY);
    }
  }, [loading]);

  return (
    <Loader loading={loading}>
      <ThemeProvider>
        <WalletClientProvider>
          <Component {...pageProps} />;
        </WalletClientProvider>
      </ThemeProvider>
    </Loader>
  );
}

export default MyApp;
