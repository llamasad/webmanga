import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './LoginRegister.module.scss';

const cx = classNames.bind(styles);
function LoginRegister({ path }) {
  const [activeBtn, setActiveBtn] = useState('');

  function handleActive(ev) {
    switch (ev.currentTarget.className) {
      case cx('login'):
        setActiveBtn('login');
        break;
      case cx('register'):
        setActiveBtn('register');
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    switch (path) {
      case '/login':
        setActiveBtn('login');
        break;
      case '/register':
        setActiveBtn('register');
        break;
      case '/':
        setActiveBtn('');
        break;

      default:
        break;
    }
  }, [path]);
  function handleSwitch(value) {
    if (activeBtn === value) {
      return true;
    }

    return false;
  }
  return (
    <div className={cx('container', { hover: activeBtn })}>
      <div className={cx('login', { active: handleSwitch('login') })} onClick={handleActive}>
        <Link to={'/login'} className={cx('link')}>
          Login
        </Link>
      </div>
      <div className={cx('register', { active: handleSwitch('register') })} onClick={handleActive}>
        <Link to={'/register'} className={cx('link')}>
          register
        </Link>
      </div>
    </div>
  );
}

export default LoginRegister;
