import classNames from 'classnames/bind';
import { useState, forwardRef, useImperativeHandle } from 'react';

import styles from './InputComponent.module.scss';

const cx = classNames.bind(styles);
const UserName = forwardRef((props, ref) => {
  const [value, setValue] = useState('');
  const [onFocus, setOnFocus] = useState(false);
  const [validateValue, setValidateValue] = useState('');
  useImperativeHandle(ref, () => ({
    get: () => {
      return value;
    },
    setValid: (value) => {
      setValidateValue(value);
      console.log(12);
    },
  }));
  return (
    <div className={cx('input-wrap', { focusing: onFocus })}>
      <input
        className={cx('input')}
        type="text"
        name="username"
        value={value}
        onBlur={() => {
          setOnFocus(false);
        }}
        onFocus={() => {
          setValidateValue('');
          setOnFocus(true);
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <span className={cx('invalid-check')}>{validateValue ? validateValue : ''}</span>
    </div>
  );
});
const Email = forwardRef((props, ref) => {
  const [onFocus, setOnFocus] = useState(false);
  const [value, setValue] = useState('');
  const [validateValue, setValidateValue] = useState('');
  useImperativeHandle(ref, () => ({
    get: () => {
      return value;
    },
    setValid: (value) => {
      setValidateValue(value);
    },
  }));
  return (
    <div className={cx('input-wrap', { focusing: onFocus })}>
      <input
        className={cx('input')}
        type="text"
        name="email"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={() => {
          setOnFocus(false);
        }}
        onFocus={() => {
          setValidateValue('');
          setOnFocus(true);
        }}
      />
      <span className={cx('invalid-check')}>{validateValue ? validateValue : ''} </span>
    </div>
  );
});
const Password = forwardRef((props, ref) => {
  const [onFocus, setOnFocus] = useState(false);
  const [value, setValue] = useState('');
  const [validateValue, setValidateValue] = useState('');
  useImperativeHandle(ref, () => ({
    get: () => {
      return value;
    },
    setValid: (value) => {
      setValidateValue(value);
    },
  }));
  return (
    <div className={cx('input-wrap', { focusing: onFocus })}>
      <input
        autoComplete={props.type === 'Register' ? 'new-password' : ''}
        className={cx('input')}
        type="password"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={() => {
          setOnFocus(false);
        }}
        onFocus={() => {
          setValidateValue('');
          setOnFocus(true);
        }}
        name="password"
      />
      <span className={cx('invalid-check')}>{validateValue ? validateValue : ''}</span>
    </div>
  );
});
const ConfirmPassword = forwardRef((props, ref) => {
  const [onFocus, setOnFocus] = useState(false);
  const [value, setValue] = useState('');
  const [validateValue, setValidateValue] = useState('');
  useImperativeHandle(ref, () => ({
    get: () => {
      return value;
    },
    setValid: (value) => {
      setValidateValue(value);
    },
  }));
  return (
    <div className={cx('input-wrap', { focusing: onFocus })}>
      <input
        autoComplete={props.type === 'Register' ? 'new-password' : ''}
        className={cx('input')}
        type="password"
        name="confirm-pass"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={() => {
          setOnFocus(false);
        }}
        onFocus={() => {
          setValidateValue('');
          setOnFocus(true);
        }}
      />
      <span className={cx('invalid-check')}>{validateValue ? validateValue : ''}</span>
    </div>
  );
});

const Input = { ConfirmPassword, Password, Email, UserName };
export default Input;
