import classNames from 'classnames/bind';

import styles from './GenresWrap.module.scss';
import { useEffect, useState } from 'react';
import { genresService } from '~/services/genresService';
import GenreItem from '../GenreItem/GenreItem';

const cx = classNames.bind(styles);
function GenresWrap() {
  const [genres, setGenres] = useState('');
  console.log(genres);
  useEffect(() => {
    genresService().then((value) => setGenres(value));
  }, []);
  return (
    <div className={cx('container')}>
      <ul className={cx('list')}>{genres && genres.map((genre, index) => <GenreItem key={index} data={genre} />)}</ul>
    </div>
  );
}

export default GenresWrap;
