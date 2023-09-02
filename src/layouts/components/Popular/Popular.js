import classNames from 'classnames/bind';

import styles from './Popular.module.scss';

const cx = classNames.bind(styles);
function Popular() {
  return <div className={cx('container')}></div>;
}

export default Popular;
