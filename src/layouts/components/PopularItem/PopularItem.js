import classNames from 'classnames/bind';
import { useContext } from 'react';

import styles from './PopularItem.module.scss';
import { Location } from '../PopularItemWrap/PopularItemWrap';
const cx = classNames.bind(styles);
function PopularItem({ data }) {
  const location = useContext(Location);

  function handleOnMouseUp(ev) {
    if (Math.abs(location.current.x - ev.clientX) > 5 || Math.abs(location.current.y - ev.clientY) > 5) {
      ev.preventDefault();
    }
  }
  return (
    <a
      href="https://www.nettruyenus.com/"
      className={cx('container')}
      style={{ backgroundImage: `url(${data.thumbnail})` }}
      draggable="false"
      onClick={handleOnMouseUp}
    >
      <div className={cx('wrapper')}>
        <h3 className={cx('title')}>{data.title}</h3>
        <p className={cx('lastest')}>
          {data.lastest_chapter.name} <span className={cx('update')}>{data.updated_at}</span>
        </p>
      </div>
    </a>
  );
}

export default PopularItem;
