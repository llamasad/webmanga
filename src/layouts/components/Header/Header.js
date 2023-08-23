import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
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
        <Link to={config.routes.home} className={cx('home-wrap')}>
          <Image src={images.lightLogo} className={cx('logo')} />
          <h1 className={cx('name')}>MangaBaka</h1>
        </Link>
        <Link className={cx('link')} to={config.routes.top}>
          Top
        </Link>
        <Link className={cx('link')} to={config.routes.genres}>
          genres
        </Link>
        <Link className={cx('link')} to={config.routes.community}>
          community
        </Link>
        <Search />

        <DarkMode width="28" height="28" className={cx('logo-mode')} />
      </div>
    </header>
  );
}

export default Header;
