import initHeadManager from 'next/dist/client/head-manager';
import { HeadManagerContext } from 'next/dist/shared/lib/head-manager-context.shared-runtime';
import { FC, PropsWithChildren } from 'react';
import ReactDOMServer from 'react-dom/server';

const HeadWrapper: FC<PropsWithChildren> = ({ children }) => {
  const manager = initHeadManager();

  const { updateHead } = manager;
  manager.updateHead = (jsxHead: JSX.Element[]) => {
    const { head } = global.document;
    if (!head.querySelector('meta[name=next-head-count]')) {
      head.insertAdjacentHTML(
        'afterbegin',
        ReactDOMServer.renderToString(<meta name="next-head-count" content="0" />),
      );
    }

    updateHead(jsxHead);
  };

  return <HeadManagerContext.Provider value={manager}>{children}</HeadManagerContext.Provider>;
};

export default HeadWrapper;
