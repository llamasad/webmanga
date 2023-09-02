import classNames from 'classnames/bind';
import { Fragment, useEffect } from 'react';
import Image from '../Image/Image';
import styles from './SearchItem.module.scss';
const cx = classNames.bind(styles);
function SearchItem({ data }) {
  useEffect(() => console.log('re-render'), []);
  return (
    <div className={cx('container')}>
      <div className={cx('img-wrap')}>
        <Image src={data.thumbnail} className={cx('img')} />
      </div>
      <div className={cx('content')}>
        <h4 className={cx('tilte')}>{data.title}</h4>
        <p className={cx('lastest-chapter')}>{data.last_chapter.name}</p>
        <p className={cx('genres')}>
          {data.genres.map((genre, id) => (
            <Fragment key={genre.id}>
              <span>
                {genre.name} {id < data.genres.length - 1 ? ',' : ''}
              </span>
            </Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}

export default SearchItem;
