import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';

import Image from '~/components/Image/Image';
import images from '~/assets/images';
import styles from './Search.module.scss';
import { SearchIcon, DeteleTextIcon } from '~/components/Icon';
import useDebounce from '~/hooks/useDebounce';
import Wrapper from '~/components/Popper/Wrapper';
import { search } from '~/services/searchService';
import SearchItem from '~/components/SearchItem';
import NotFound from '~/components/NotFound';
// import abc from '~/services/searchService';
const cx = classNames.bind(styles);
function Search({ className }) {
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  function handleTextChange(ev) {
    if (ev.target.value.trim() || searchValue) {
      setSearchValue(ev.target.value);
      setLoading(true);
      setSearchResult([]);
    }
  }
  function handleDelete() {
    setSearchValue('');
    setSearchResult([]);
  }
  const value = useDebounce(searchValue, 500);
  useEffect(() => {
    if (!value) {
      return;
    }
    search(value).then((response) => {
      setSearchResult(response);
      setLoading(false);
    });
  }, [value]);
  return (
    <div>
      <Tippy
        interactive
        offset={[0, 10]}
        visible={value && !loading && searchValue}
        placement="bottom"
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <Wrapper>
              {/* <h4 className={cx('search-title')}>Manga</h4> */}
              {searchResult.length ? (
                searchResult.map((result, id) => <SearchItem key={id} data={result} />)
              ) : (
                <NotFound />
              )}
            </Wrapper>
          </div>
        )}
      >
        <div className={cx('wrapper')}>
          <div className={cx('wrapper-input')}>
            <input className={cx('input', className)} value={searchValue} onChange={handleTextChange} />
            <div className={cx('wrap-logo')}>
              {searchValue && loading && <Image src={images.loadLogo} className={cx('load')} />}
              {searchValue && !loading && <DeteleTextIcon className={cx('delete')} onClick={handleDelete} />}
            </div>
          </div>

          <SearchIcon className={cx('search-icon')} />
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
