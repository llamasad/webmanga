import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { followCursor } from 'tippy.js';
import Image from '~/components/Image';
import styles from './RecentItem.module.scss';
import { Wrapper } from '~/components/Popper';
import changeNumber from '~/utils/changeNumber';

const cx = classNames.bind(styles);
function RecentItem({ data }) {
  return (
    <li className={cx('container')}>
      <Image src={data.thumbnail} className={cx('img')} />
      <div className={cx('update-at')}>{data.updated_at}</div>
      <div className={cx('show-wrap')}>
        <div className={cx('total-view')}>
          {' '}
          <i className="fa-solid fa-eye"></i> {changeNumber(data.total_views)}
        </div>
        <div className={cx('rating')}>
          {' '}
          <i className={cx('rating-icon', 'fa-solid', 'fa-star')}></i>updating
        </div>
      </div>
      <div>
        <Tippy
          offset={[200, 0]}
          followCursor={true}
          plugins={[followCursor]}
          render={() => (
            <Wrapper className={cx('wrapper')}>
              <h4 className={cx('tippy-title')}>{data.title}</h4>
              <p className={cx('other-name')}>
                <span>{data.other_names[0] && 'Tên khác: '}</span>
                {data.other_names.reduce((total, currentValue, index) => {
                  if (data.other_names.length === 1) {
                    return currentValue;
                  }
                  return data.other_names.length - 1 === index ? total + currentValue : total + currentValue + ', ';
                }, '')}
              </p>
              <p className={cx('status')}>Tình trạng: {data.status === 'Ongoing' ? 'đang tiến hành' : 'unknown'}</p>
              <p className={cx('view')}> Lượt xem: {changeNumber(data.total_views)}</p>
              <p className={cx('folowing')}>Lượt theo dõi: {changeNumber(data.followers)}</p>
              <div className={cx('genres')}>
                {data.genres.map((genre, index) => {
                  return (
                    <div key={index} className={cx('genre')}>
                      {genre.name}
                    </div>
                  );
                })}
              </div>
              <p className={cx('decription')}>{data.short_description}</p>
            </Wrapper>
          )}
        >
          <p className={cx('title')}>{data.title}</p>
        </Tippy>
      </div>
      <p className={cx('latest-chapter')}>{data.last_chapter.name}</p>
    </li>
  );
}

export default RecentItem;
