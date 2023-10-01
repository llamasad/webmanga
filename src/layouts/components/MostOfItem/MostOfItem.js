import classNames from 'classnames/bind';

import styles from './MostOfItem.module.scss';
import Image from '~/components/Image';
import changeNumber from '~/utils/changeNumber';
const cx = classNames.bind(styles);
function MostOfItem({ data, rating }) {
  return (
    <li className={cx('container')}>
      <div className={cx('rating')}>{'0' + rating}</div>
      <Image className={cx('img')} src={data.thumbnail} />
      <div className={cx('wrapper')}>
        <h4 className={cx('title')}>{data.title}</h4>
        <div className={cx('wrapper-inner')}>
          <span className={cx('chapter')}>{data.last_chapter.name}</span>
          <span className={cx('view')}>
            {changeNumber(data.total_views) + '  '}
            <i className="fa-solid fa-eye"></i>
          </span>
        </div>
      </div>
    </li>
  );
}

export default MostOfItem;
