import classNames from 'classnames/bind';

import styles from './HeaderCustom.module.scss';
import { PopularIcon } from '../Icon';

const cx = classNames.bind(styles);
function HeaderCustom({ children }) {
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <h2 className={cx('header')}>{children}</h2>
      </div>
    </div>
  );
}

export default HeaderCustom;
