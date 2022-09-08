import { useAddress, useMetamask, useWalletConnect, useCoinbaseWallet, useDisconnect } from "@thirdweb-dev/react";
import React, { useState } from "react";
import Image from 'next/image'
import { useIntl } from 'react-intl'
import utilStyles from '../../styles/App.module.scss'
import Link from 'next/link'
import Modal from '../modal/Modal'

export default function Banner({ ina }) {
  const [showModal, setShowModal] = useState(false);

  const intl = useIntl();
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbaseWallet = useCoinbaseWallet();

    return (
    <div className={utilStyles.main}>
        <div className={utilStyles.main__container}>
            <div className={utilStyles.main__imgContainer}>
                <Image src={'https://ipfs.androidbutut.my.id/2.png'} width={475} height={475} alt="cat" className={utilStyles.main__img}/>
            </div>
            <div className={utilStyles.main__content}>
                <h1> {intl.formatMessage({ id: 'join' })} <span className={utilStyles.textHighlight}>{intl.formatMessage({ id: 'movement' })}</span> {intl.formatMessage({ id: 'and' })} <span className={utilStyles.textHighlight}>{intl.formatMessage({ id: 'unlock' })}</span> {intl.formatMessage({ id: 'unique' })} <span className={utilStyles.textHighlight}>{intl.formatMessage({ id: 'art' })}</span></h1>
                <p>{intl.formatMessage({ id: 'discovered' })}</p>
      {address ? (
                <button className={utilStyles.main__btn}><a href="#">{intl.formatMessage({ id: 'view' })}</a></button>
      ) : (
<>
                <button className={utilStyles.main__btn}><a onClick={() => setShowModal(true)}>{intl.formatMessage({ id: 'withSuffix' })}</a></button>
            <Modal onClose={() => setShowModal(false)}
                show={showModal}></Modal>
</>
        )}
            </div>
        </div>
    </div>
    )
}
