import classNames from 'classnames/bind';

import styles from './TopDonate.module.scss';
import Image from '~/components/Image/Image';
const cx = classNames.bind(styles);

function TopDonate() {
  return (
    <div className={cx('container')}>
      <div className={cx('outer-wrapper')}>
        <h4 className={cx('header')}>Top Donate</h4>
        <div className={cx('wrapper')}>
          <div className={cx('top2', 'top')}>
            <Image
              src={'https://i.pinimg.com/200x150/bc/17/4e/bc174e193f9b0fa89655adcbdd6bb5f1.jpg'}
              className={cx('img')}
            />
          </div>
          <div className={cx('top1', 'top')}>
            <Image src={'https://i.kym-cdn.com/photos/images/original/002/480/332/45a.jpg'} className={cx('img')} />
          </div>
          <div className={cx('top3', 'top')}>
            {' '}
            <Image
              src={'https://i.kym-cdn.com/entries/icons/facebook/000/042/102/davidmartinezstare.jpg'}
              className={cx('img')}
            />
          </div>
        </div>
      </div>
      <div className={cx('detail')}></div>
    </div>
  );
}

export default TopDonate;
