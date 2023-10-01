import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Register.module.scss';
import { RightArrow } from '~/components/Icon';
import WrapperDeLight from '~/components/WrapperDeLight/WrapperDeLight';
import AuthenticationForm from '~/components/AuthenticationForm';
const cx = classNames.bind(styles);
function Register() {
  useEffect(() => {
    console.log('reRender');
  }, []);
  return (
    <WrapperDeLight>
      <header className={cx('container')}>
        <Link className={cx('link')} to={'/'}>
          <span>Home</span>
        </Link>
        <span className={cx('icon-wrap')}>
          <RightArrow classNames={cx('icon')} />
          <RightArrow classNames={cx('icon')} />
        </span>
        <span>Register</span>
      </header>
      <AuthenticationForm type="Register" action="/" method="POST" />
    </WrapperDeLight>
  );
}

export default Register;
