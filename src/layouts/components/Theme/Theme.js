import classNames from 'classnames/bind';
import { useLayoutEffect, useState, useContext } from 'react';

import styles from './Theme.module.scss';
import * as Icon from '~/components/Icon';
import { ThemeColor } from '../Header';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Theme(prop) {
  const [mode, setMode] = useState(localStorage.getItem('colorMode') || 'LightMode');
  const Theme = Icon[mode];
  const setLogo = useContext(ThemeColor);
  function handleModeSwitch() {
    switch (mode) {
      case 'LightMode':
        setMode('DarkMode');
        document.documentElement.style.setProperty('--mode-color', '#2F2A26');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--logo-color', '#ffffff');
        document.documentElement.style.setProperty('--authentication-color', '#474747');
        document.documentElement.style.setProperty('--background-color', '#7a7a7a');
        document.documentElement.style.setProperty('--search-result-color', '#464440');
        document.documentElement.style.setProperty('--background-image', `url(${images.backgroundDark})`);
        document.documentElement.style.setProperty('--wrap-delight-img', `url(${images.wrapDelightDark})`);

        localStorage.setItem('colorMode', 'DarkMode');
        setLogo('darkLogo');
        break;
      case 'DarkMode':
        setMode('LightMode');
        document.documentElement.style.setProperty('--mode-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#2b2b2b');
        document.documentElement.style.setProperty('--logo-color', '#3b3b3bab');
        document.documentElement.style.setProperty('--authentication-color', '#ebeaea');
        document.documentElement.style.setProperty('--background-color', '#ffffff');
        document.documentElement.style.setProperty('--search-result-color', '#fafafa');
        document.documentElement.style.setProperty('--background-image', `url(${images.backgroundLight})`);
        document.documentElement.style.setProperty('--wrap-delight-img', `url(${images.wrapDelightLight})`);
        localStorage.setItem('colorMode', 'LightMode');
        setLogo('lightLogo');
        break;
      default:
        break;
    }
  }
  useLayoutEffect(() => {
    switch (mode) {
      case 'DarkMode':
        setMode('DarkMode');
        document.documentElement.style.setProperty('--mode-color', '#2F2A26');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--logo-color', '#ffffff');
        document.documentElement.style.setProperty('--authentication-color', '#474747');
        document.documentElement.style.setProperty('--background-color', '#7a7a7a');
        document.documentElement.style.setProperty('--search-result-color', '#464440');
        document.documentElement.style.setProperty('--background-image', `url(${images.backgroundDark})`);
        document.documentElement.style.setProperty('--wrap-delight-img', `url(${images.wrapDelightDark})`);
        setLogo('darkLogo');
        break;
      case 'LightMode':
        setMode('LightMode');
        document.documentElement.style.setProperty('--mode-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#2b2b2b');
        document.documentElement.style.setProperty('--logo-color', '#3b3b3bab');
        document.documentElement.style.setProperty('--authentication-color', '#ebeaea');
        document.documentElement.style.setProperty('--background-color', '#ffffff');
        document.documentElement.style.setProperty('--search-result-color', '#fafafa');
        document.documentElement.style.setProperty('--background-image', `url(${images.backgroundLight})`);
        document.documentElement.style.setProperty('--wrap-delight-img', `url(${images.wrapDelightLight})`);
        setLogo('lightLogo');
        break;
      default:
        break;
    }
  }, []);
  return (
    <div className={cx('container')} onClick={handleModeSwitch}>
      <Theme {...prop} />
    </div>
  );
}

export default Theme;
