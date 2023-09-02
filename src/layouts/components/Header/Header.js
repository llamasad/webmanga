import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/images';
import styles from './Header.module.scss';
import Image from '~/components/Image';

import Search from '../Search';
import LoginRegister from '../LoginRegister';
import Mode from '../Theme';
import { createContext, useState } from 'react';

const cx = classNames.bind(styles);

export const ThemeColor = createContext(null);
function Header() {
  const [logo, setLogo] = useState('lightLogo');

  return (
    <ThemeColor.Provider value={setLogo}>
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('first-wrapper')}>
            <Link to={config.routes.home} className={cx('home-wrap')}>
              <Image src={images[logo]} className={cx('logo')} />
              <h1 className={cx('name')}>MangaBaka</h1>
            </Link>
          </div>
          <div className={cx('middle-wrapper')}>
            <Link className={cx('link')} to={config.routes.top}>
              Top
            </Link>
            <Link className={cx('link')} to={config.routes.genres}>
              genres
            </Link>
            <Link className={cx('link')} to={config.routes.community}>
              community
            </Link>
          </div>
          <div className={cx('second-middle-wrapper')}>
            <Search className={cx('input')} />
          </div>

          <div className={cx('bottom-wrapper')}>
            <Mode width="28" height="28" className={cx('logo-mode')} />
            <LoginRegister path={window.location.pathname} />
          </div>
        </div>
      </header>
    </ThemeColor.Provider>
  );
}

export default Header;
