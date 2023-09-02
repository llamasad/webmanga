import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';
import Image from '../Image';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function NotFound({ className, ...prop }) {
  return (
    <div className={cx('container', className)}>
      <Image src={images.notFoundLogo} className={cx('img')} />
      <span>Not Found</span>
    </div>
  );
}

export default NotFound;
