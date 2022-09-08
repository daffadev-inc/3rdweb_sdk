import React, { useState } from 'react';
import Aside from './sidebar/Aside';
import Main from './main';
import style from '../styles/App.module.scss';

function Layout({ setLocale }) {
  const [ina, setIna] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleInaChange = (checked) => {
    setIna(checked);
    setLocale(checked ? 'id' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`${style.app} ${ina ? 'ina' : ''} ${style.toggled ? 'style.toggled' : ''}`}>
      <Aside
        image={image}
        collapsed={collapsed}
        ina={ina}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Main
        image={image}
        toggled={toggled}
        collapsed={collapsed}
        ina={ina}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        handleInaChange={handleInaChange}
        handleImageChange={handleImageChange}
      />
    </div>
  );
}

export default Layout;
