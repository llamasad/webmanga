import classNames from 'classnames/bind';

import Image from '~/components/Image/Image';
import images from '~/assets/images';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icon';

const cx = classNames.bind(styles);
function Search() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-input')}>
        <input className={cx('input')} />
        <Image src={images.loadLogo} className={cx('load')} />
      </div>
      <SearchIcon className={cx('search-icon')} />
    </div>
  );
}

export default Search;
