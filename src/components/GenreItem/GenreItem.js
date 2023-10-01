import classNames from 'classnames/bind';

import styles from './GenreItem.module.scss';

const cx = classNames.bind(styles);
function GenreItem({ data }) {
  return (
    <li className={cx('container')}>
      <a href="/ecchi">
        <span className={cx('name')}>{data.name}</span>
        <div className={cx('description')}>{data.description}</div>
      </a>
    </li>
  );
}

export default GenreItem;
