import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import HeaderCustom from '~/components/HeaderCustom/HeaderCustom';
import styles from './GenresHome.module.scss';
import { genresService } from '~/services/genresService';
import GenreHome from '../GenreHome/GenreHome';
const cx = classNames.bind(styles);
function GenresHome() {
  const [genresValue, setGenresValue] = useState('');
  console.log(genresValue);
  useEffect(() => {
    genresService().then((value) => {
      setGenresValue(value);
    });
  }, []);
  return (
    <div className={cx('container')}>
      <HeaderCustom>
        <i className="fa-solid fa-layer-group"></i> Recommend
      </HeaderCustom>
      <ul className={cx('wrapper')}>
        <li className={cx('line-through')}>Release</li>
        <li className={cx('item')}>Newest</li>
        <li className={cx('item')}>Latest</li>
        <li className={cx('line-through')}>State</li>
        <li className={cx('item')}>On going</li>
        <li className={cx('item')}>Completed</li>
        <li className={cx('line-through')}>Top</li>
        <li className={cx('item')}>All</li>
        <li className={cx('item')}>Rating</li>
        <li className={cx('item')}>Month</li>
        <li className={cx('item')}>Week</li>
        <li className={cx('item')}>Follow</li>
        <li className={cx('item')}>Comment</li>
        <li className={cx('item')}>Chapter</li>
        <li className={cx('line-through')}>Category</li>
        {genresValue &&
          genresValue.map((value, index) => {
            return <GenreHome key={index} data={value} />;
          })}
        <li className={cx('line-through')}>Other</li>
        <li className={cx('item')}>Newest</li>
        <li className={cx('item')}>Latest</li>
      </ul>
    </div>
  );
}

export default GenresHome;
