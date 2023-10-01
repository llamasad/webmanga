import classNames from 'classnames/bind';

import styles from './Popular.module.scss';
import HeaderCustom from '~/components/HeaderCustom';
import { PopularIcon } from '~/components/Icon';
import PopularItemWrap from '../PopularItemWrap';
import { useEffect } from 'react';
const cx = classNames.bind(styles);
function Popular() {
  useEffect(function () {
    console.log('render');
  }, []);
  return (
    <div className={cx('container')}>
      <HeaderCustom>
        <PopularIcon className={cx('popular')} />
        Popular
      </HeaderCustom>
      <PopularItemWrap />
    </div>
  );
}

export default Popular;
