import classNames from 'classnames/bind';
import './GlobalStyles.scss';
import styles from './GlobalStyles.module.scss';
import { useEffect } from 'react';
const cx = classNames.bind(styles);
function GlobalStyles({ children }) {
  return <div className={cx('responsive')}>{children}</div>;
}

export default GlobalStyles;
