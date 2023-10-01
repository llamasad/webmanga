import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Recent.module.scss';
import HeaderCustom from '~/components/HeaderCustom/HeaderCustom';
import { RecentIcon } from '~/components/Icon';
import { recentService } from '~/services/recentService';
import RecentItem from '../RecentItem';
import MoreBtn from '../MoreBtn';
const cx = classNames.bind(styles);
function Recent() {
  const [recentValue, setRecentValue] = useState('');
  useEffect(() => {
    recentService().then((value) => {
      setRecentValue(value.comics);
    });
  }, []);

  return (
    <div className={cx('container')}>
      <HeaderCustom>
        <RecentIcon className={cx('icon')} />
        Recent
      </HeaderCustom>
      <ul className={cx('list')}>
        {recentValue &&
          recentValue.map((value, index) => {
            return <RecentItem key={index} data={value} />;
          })}
      </ul>
      <MoreBtn />
    </div>
  );
}

export default Recent;
