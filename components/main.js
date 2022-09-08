import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import Banner from './banner/Banner'
import { FaHeart, FaAlignLeft } from 'react-icons/fa';
import style from '../styles/App.module.scss';

const Main = ({
  home,
  children,
  collapsed,
  ina,
  handleToggleSidebar,
  handleCollapsedChange,
  handleInaChange,
}) => {
  const intl = useIntl();

  return (
    <main>
      <div className={style.btn_toggle} onClick={() => handleToggleSidebar(true)}>
        <FaAlignLeft />
      </div>
      <header>
        <h2 className={style.title}>
           {intl.formatMessage({ id: 'title' })}
        </h2>
      <div className={style.block}>
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleInaChange}
          checked={ina}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> {intl.formatMessage({ id: 'ina' })}</span>
      </div>
      </header>
        <main>{children}</main>
      <footer>
      <div className={style.block}>
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleCollapsedChange}
          checked={collapsed}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> {intl.formatMessage({ id: 'collapsed' })}</span>
      </div>
        <small>
          © {new Date().getFullYear()} {intl.formatMessage({ id: 'madewith' })} <FaHeart style={{ color: 'red' }} /> {intl.formatMessage({ id: 'by' })} -{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://daffadev.my.id">
            {intl.formatMessage({ id: 'author' })}
          </a>
        </small>
      </footer>
    </main>
  );
};

export default Main;
