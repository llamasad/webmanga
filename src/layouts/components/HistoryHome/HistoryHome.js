import classNames from 'classnames/bind';

import styles from './HistoryHome.module.scss';
import HeaderCustom from '~/components/HeaderCustom/HeaderCustom';
import { RightArrow } from '~/components/Icon';
import { useState } from 'react';
import Image from '~/components/Image/Image';
const cx = classNames.bind(styles);
function HistoryHome() {
  const [historyValue] = useState(() => JSON.parse(localStorage.getItem('historyRead')) || []);

  return (
    <div className={cx('container')}>
      <HeaderCustom>
        <i className={cx('icon', 'fa-solid', 'fa-clock-rotate-left')}></i>
        History
      </HeaderCustom>
      <div className={cx('see-all')}>
        See all
        <RightArrow classNames={cx('right-icon')} />{' '}
      </div>
      <ul className={cx('list')}>
        {historyValue &&
          historyValue.map((value, index) => (
            <li className={cx('item')} key={index}>
              <Image className={cx('img')} src={value.thumbnail} />
              <div className={cx('outer-wrapper')}>
                <div className={cx('wrapper')}>
                  <h4 className={cx('name')}>{value.title}</h4>
                  <i className={cx('icon', 'fa-solid', 'fa-delete-left')}></i>
                </div>
                <div className={cx('wrapper')}>
                  <div className={cx('chapter-read')}>Read to {value.readTo}</div>

                  <div className={cx('latest-chapter')}> Latest: 12</div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HistoryHome;
