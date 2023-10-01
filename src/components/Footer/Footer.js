import classNames from 'classnames/bind';
import MediaQuery from 'react-responsive';
import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer className={cx('container')}>
      <MediaQuery minWidth={865}>
        <div className={cx('huge')} style={{ backgroundImage: `url(${images.backGroundFooter})` }}></div>
      </MediaQuery>
      <MediaQuery maxWidth={864}>
        <div className={cx('bit')} style={{ backgroundImage: `url(${images.backGroundFooterSmall})` }}></div>
      </MediaQuery>
    </footer>
  );
}

export default Footer;
