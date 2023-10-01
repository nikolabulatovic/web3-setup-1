import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*
          The point of this script is to improve user experience. 
          This script is run to load the appropriate theme before everything else,
          so that when we go to a page we have appropriate theme show up right away
          and we do not have screen flashing 'light' theme and then quickly changing
          to 'dark' theme
        */}
        <Script
          id="theme-init-script"
          dangerouslySetInnerHTML={{
            __html: `
                try {
                  if (localStorage.getItem('swarm-theme') === 'dark' || (!localStorage.getItem('swarm-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light')
                  }
                } catch (_) {}
              `,
          }}
          strategy="beforeInteractive"
        />
      </Head>
      {/* 
        Class 'preload' forces all elements on the page to have no transition.
        We do not want transitions on page load because of the bad UX of 
        transitioning from 'light' to 'dark' theme if user is using dark theme.
        We remove this 'preload' class in '_app.tsx' on window load.
      */}
      <body className="preload">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
