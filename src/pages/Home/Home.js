import classNames from 'classnames/bind';
import MediaQuery from 'react-responsive';
import Popular from '~/layouts/components/Popular';
import Decription from '~/layouts/components/Decription';
import WrapperDeLight from '~/components/WrapperDeLight';
import Recent from '~/layouts/components/Recent/Recent';
import MostView from '~/layouts/components/MostView';
import GenresHome from '~/layouts/components/GenresHome';
import styles from './Home.module.scss';
import HistoryHome from '~/layouts/components/HistoryHome/HistoryHome';
const cx = classNames.bind(styles);
function Home() {
  return (
    <WrapperDeLight>
      <Decription />
      <Popular />

      <div className={cx('wrapper')}>
        <Recent />
        <div className={cx('inner-wrapper')}>
          <MediaQuery minWidth={865}>
            <MostView />
            <GenresHome />
          </MediaQuery>

          <HistoryHome />
        </div>
      </div>
    </WrapperDeLight>
  );
}

export default Home;
