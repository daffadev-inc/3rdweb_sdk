import Image from 'next/image'
import { useIntl } from 'react-intl'
import utilStyles from '../../styles/App.module.scss'
import Link from 'next/link'

export default function Banner({ ina }) {
  const intl = useIntl();
    return (
    <div className={utilStyles.main}>
        <div className={utilStyles.main__container}>
            <div className={utilStyles.main__imgContainer}>
                <Image src={'https://ipfs.androidbutut.my.id/2.png'} width={475} height={475} alt="cat" className={utilStyles.main__img}/>
            </div>
            <div className={utilStyles.main__content}>
                <h1> {intl.formatMessage({ id: 'join' })} <span className={utilStyles.textHighlight}>{intl.formatMessage({ id: 'movement' })}</span> {intl.formatMessage({ id: 'and' })} <span className={utilStyles.textHighlight}>{intl.formatMessage({ id: 'unlock' })}</span> {intl.formatMessage({ id: 'unique' })} <span className={utilStyles.textHighlight}>{intl.formatMessage({ id: 'art' })}</span></h1>
                <p>{intl.formatMessage({ id: 'discovered' })}</p>
                <button className={utilStyles.main__btn}><a href="#">{intl.formatMessage({ id: 'view' })}</a></button>
            </div>
        </div>
    </div>
    )
}
