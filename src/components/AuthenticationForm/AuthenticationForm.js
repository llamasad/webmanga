import classNames from 'classnames/bind';
import { Fragment, useRef } from 'react';

import styles from './AuthenticationForm.module.scss';
import images from '~/assets/images';
import Image from '../Image';
import Input from './InputComponent/InputComponent';
import validate from '~/utils/validate';
const cx = classNames.bind(styles);
function AuthenticationForm({ type, action, method }) {
  const userValidate = useRef('');
  const emailValidate = useRef('');
  const passwordValidate = useRef('');
  const confirmPasswordValidate = useRef('');
  function handleSumitForm(ev) {
    ev.preventDefault();
    switch (type) {
      case 'Login':
        let userCheckLogin =
          validate.isRequired(userValidate.current.get(), userValidate.current.setValid) ||
          validate.maxLength(userValidate.current.get(), userValidate.current.setValid, 12);
        let passwordLogin = validate.isRequired(passwordValidate.current.get(), passwordValidate.current.setValid);
        if (!userCheckLogin && !passwordLogin) {
          console.log('submit');
        }
        break;
      case 'Register':
        let userCheckRegister =
          validate.isRequired(userValidate.current.get(), userValidate.current.setValid) ||
          validate.maxLength(userValidate.current.get(), userValidate.current.setValid, 12);
        let emailCheckRegister =
          validate.isRequired(emailValidate.current.get(), emailValidate.current.setValid) ||
          validate.isEmail(emailValidate.current.get(), emailValidate.current.setValid);
        let passwordRegister = validate.isRequired(passwordValidate.current.get(), passwordValidate.current.setValid);
        let ConfirmPasswordRegister =
          validate.isRequired(confirmPasswordValidate.current.get(), confirmPasswordValidate.current.setValid) ||
          validate.checkConFirmPassword(
            passwordValidate.current.get(),
            confirmPasswordValidate.current.get(),
            confirmPasswordValidate.current.setValid,
          );
        if (!userCheckRegister && !passwordRegister && !emailCheckRegister && !ConfirmPasswordRegister) {
          console.log('submit');
        }
        break;
      default:
        break;
    }
    // if(validate.isEmail())
  }
  return (
    <div className={cx('container')}>
      <form
        className={cx('form')}
        action={action}
        method={method}
        onClick={(ev) => {
          ev.preventDefault();
        }}
      >
        <span className={cx('header')}>
          {type} {type === 'Login' && 'With'}
        </span>
        {type === 'Login' && (
          <Fragment>
            <a href="#" className={cx('link-auth', 'link-auth--face')}>
              <i className="fa fa-facebook-official"></i>
              Facebook
            </a>
            <a href="#" className={cx('link-auth', 'link-auth--goo')}>
              <Image src={images.iconGoogle} className={cx('img')} alt="GOOGLE" />
              Google
            </a>
          </Fragment>
        )}
        <div className={cx('header-user-wrap')}>
          <span className={cx('header-user')}>Username</span>
        </div>
        <Input.UserName ref={userValidate} />
        {type === 'Register' && (
          <Fragment>
            <div className={cx('header-user-wrap')}>
              <span className={cx('header-user')}>Email</span>
            </div>
            <Input.Email ref={emailValidate} />
          </Fragment>
        )}
        <div className={cx('header-user-wrap')}>
          <span className={cx('header-user')}>Password</span>

          {type === 'Login' && (
            <a href="#" className={cx('forgot-pw', 'link')}>
              Forgot?
            </a>
          )}
        </div>
        <Input.Password ref={passwordValidate} type={type} />
        {type === 'Register' && (
          <Fragment>
            <div className={cx('header-user-wrap')}>
              <span className={cx('header-user')}>Confirm Password</span>
            </div>
            <Input.ConfirmPassword ref={confirmPasswordValidate} />
          </Fragment>
        )}

        <div className={cx('bottom-wrap')}>
          <button className={cx('bottom')} onClick={handleSumitForm}>
            {type}
          </button>
        </div>
        {type === 'Login' && (
          <div className={cx('other-option')}>
            <span className={cx('menber')}>Not a member?</span>

            <a href="#" className={cx('link')}>
              Register now
            </a>
          </div>
        )}
      </form>
    </div>
  );
}

export default AuthenticationForm;
