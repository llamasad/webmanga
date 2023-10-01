import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Decription.module.scss';
import Image from '~/components/Image';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Decription() {
  return (
    <div className={cx('containner')}>
      <Link to={'/register'}>
        <MediaQuery maxWidth={864}>
          <Image src={images.decriptionSmall} className={cx('img')} />
        </MediaQuery>
        <MediaQuery minWidth={865}>
          <Image src={images.decriptionMedium} className={cx('img')} />
        </MediaQuery>
      </Link>
    </div>
  );
}

export default Decription;
