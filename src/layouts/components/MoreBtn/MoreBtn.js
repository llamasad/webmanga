import classNames from 'classnames/bind';

import styles from './MoreBtn.module.scss';

const cx = classNames.bind(styles);
function MoreBtn() {
  return (
    <div className={cx('container')}>
      <span>More</span>

      <i className={cx('icon', 'fa-solid', 'fa-arrow-right')}></i>
    </div>
  );
}

export default MoreBtn;
