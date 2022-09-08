import React from 'react'
import Head from 'next/head'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/global.css';
import style from '../styles/App.module.scss';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }) {

  return (
<>
      <Head>
        <title>My new cool app</title>
      </Head>
    <ThirdwebProvider desiredChainId={activeChainId}>
          <Component {...pageProps} />
    </ThirdwebProvider>
</>
  );
}

export default MyApp
