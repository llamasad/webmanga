import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Header.module.scss';
import Image from '~/components/Image';
import { DarkMode, LightMode } from '~/components/Icon';
import Search from '../Search';
const cx = classNames.bind(styles);
console.log(cx('logo-mode'));
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Image src={images.lightLogo} className={cx('logo')} />
        <h1 className={cx('name')}>MangaBaka</h1>
        <Search />
        <DarkMode width="28" height="28" className={cx('logo-mode')} />
      </div>
    </header>
  );
}

export default Header;
