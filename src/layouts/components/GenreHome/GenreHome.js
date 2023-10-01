import classNames from 'classnames/bind';

import styles from './GenreHome.module.scss';
const cx = classNames.bind(styles);
function GenreHome({ data }) {
  return <li className={cx('container')}>{data.name}</li>;
}

export default GenreHome;
