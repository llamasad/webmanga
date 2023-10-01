import classNames from 'classnames/bind';

import styles from './WrapperDeLight.module.scss';
const cx = classNames.bind(styles);
function WrapperDeLight({ children }) {
  return <div className={cx('container')}>{children}</div>;
}

export default WrapperDeLight;
