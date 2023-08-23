import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import Image from '~/components/Image/Image';
import images from '~/assets/images';
import styles from './Search.module.scss';
import { SearchIcon, DeteleTextIcon } from '~/components/Icon';
import useDebounce from '~/hooks/useDebounce';

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  function handleTextChange(ev) {
    setSearchValue(ev.target.value);
  }
  console.log(searchValue);
  const value = useDebounce(searchValue, 400);

  useEffect(() => {
    console.log(searchValue);
    setLoading(true);
  }, [value]);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-input')}>
        <input className={cx('input')} value={searchValue} onChange={handleTextChange} />
        <div className={cx('wrap-logo')}>
          {searchValue && loading && <Image src={images.loadLogo} className={cx('load')} />}
          {searchValue && !loading && <DeteleTextIcon className={cx('delete')} />}
        </div>
      </div>

      <SearchIcon className={cx('search-icon')} />
    </div>
  );
}

export default Search;
