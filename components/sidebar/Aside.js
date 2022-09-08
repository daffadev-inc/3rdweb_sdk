import { useAddress, useMetamask, useWalletConnect, useCoinbaseWallet, useDisconnect } from "@thirdweb-dev/react";
import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import Link from 'next/link';
import 'react-pro-sidebar/dist/css/styles.css';
import style from '../../styles/App.module.scss';
import { FaGhost, FaGripHorizontal, FaList, FaGithub, FaWallet, FaHeart } from 'react-icons/fa';

const Aside = ({ collapsed, ina, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const disconnectWallet = useDisconnect();
  return (
    <ProSidebar style={{height: '100vh'}}
      ina={ina}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {intl.formatMessage({ id: 'sidebarTitle' })}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaGhost />}
          ><Link href='/'>
            {intl.formatMessage({ id: 'dashboard' })}
           </Link>
          </MenuItem>
          <MenuItem icon={<FaGripHorizontal />}
            suffix={<span className={`${style.badge} ${style.red}`}>{intl.formatMessage({ id: 'new' })}</span>}> <Link href='/blog'>{intl.formatMessage({ id: 'blog' })}</Link></MenuItem>
        </Menu>
      {address ? (
        <Menu iconShape="circle">
          <MenuItem icon={<FaWallet color={'#ff0010'} />} onClick={disconnectWallet}>Sign Out {address.slice(0, 6).concat("_").concat(address.slice(-4))}</MenuItem>
        </Menu>
      ) : (
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className={`${style.badge} ${style.yellow}`}>3</span>}
            title={intl.formatMessage({ id: 'withSuffix' })}
            icon={<FaWallet />}
          >
            <MenuItem onClick={connectWithMetamask}
            icon={<i className={style.metamask}></i>}> {intl.formatMessage({ id: 'metamask' })} </MenuItem>
            <MenuItem onClick={connectWithWalletConnect}
            icon={<i className={style.walletconnect}></i>}> {intl.formatMessage({ id: 'walletconnect' })} </MenuItem>
            <MenuItem onClick={connectWithCoinbaseWallet}
            icon={<i className={style.coinbase}></i>}> {intl.formatMessage({ id: 'coinbase' })} </MenuItem>
          </SubMenu>
        </Menu>
        )}
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className={style.sidebar_btn_wrapper}
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className={style.sidebar_btn}
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {intl.formatMessage({ id: 'viewSource' })}
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
