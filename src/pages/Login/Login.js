import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Login.module.scss';
import WrapperDeLight from '~/components/WrapperDeLight/WrapperDeLight';
import AuthenticationForm from '~/components/AuthenticationForm/AuthenticationForm';
import { RightArrow } from '~/components/Icon';

const cx = classNames.bind(styles);

function Login() {
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
        <span>Login</span>
      </header>
      <AuthenticationForm type="Login" action="/" method="POST" />
    </WrapperDeLight>
  );
}

export default Login;
