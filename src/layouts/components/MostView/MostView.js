import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import HeaderCustom from '~/components/HeaderCustom/HeaderCustom';
import { mostViewService } from '~/services/mostViewService';
import styles from './MostView.module.scss';
import MostOfItem from '../MostOfItem';
const cx = classNames.bind(styles);
function MostView() {
  const [mostViewItemByDaily, setMostViewItemByDaily] = useState('');
  const [mostViewItemByWeekly, setMostViewItemByWeekly] = useState('');
  const [mostViewItemByMonthly, setMostViewItemByMonthly] = useState('');
  const view = { daily: mostViewItemByDaily, weekly: mostViewItemByWeekly, monthly: mostViewItemByMonthly };
  const [active, setActive] = useState('daily');
  useEffect(() => {
    mostViewService('/top/daily').then((value) => setMostViewItemByDaily(value.comics));
    mostViewService('/top/weekly').then((value) => setMostViewItemByWeekly(value.comics));
    mostViewService('/top/monthly').then((value) => setMostViewItemByMonthly(value.comics));
  }, []);
  console.log(view[active]);
  function handleOnClick(ev) {
    console.log(ev.currentTarget.matches('weekly'));
    if (ev.currentTarget.matches('.daily') && mostViewItemByDaily) {
      setActive('daily');
    } else if (ev.currentTarget.matches('.weekly') && mostViewItemByWeekly) {
      mostViewItemByWeekly && setActive('weekly');
    } else if (ev.currentTarget.matches('.monthly') && mostViewItemByMonthly) {
      mostViewItemByMonthly && setActive('monthly');
    }
  }
  function take8element(data) {
    let arr = [];
    for (let i = 0; i < 8; i++) {
      arr[i] = data[i];
    }
    return arr;
  }
  return (
    <div className={cx('container')}>
      <HeaderCustom>
        <i className="fa-solid fa-chart-simple"></i>Most view
      </HeaderCustom>
      <div className={cx('wrapper')}>
        <span className={cx('typeof-mostview', 'daily', { active: active === 'daily' })} onClick={handleOnClick}>
          Daily
        </span>
        <span className={cx('typeof-mostview', 'weekly', { active: active === 'weekly' })} onClick={handleOnClick}>
          Weekly
        </span>
        <span className={cx('typeof-mostview', 'monthly', { active: active === 'monthly' })} onClick={handleOnClick}>
          Monthly
        </span>
      </div>
      <ul className={cx('wrapper-list')}>
        {view[active] &&
          take8element(view[active]).map((value, index) => <MostOfItem data={value} key={index} rating={index + 1} />)}
      </ul>
    </div>
  );
}

export default MostView;
