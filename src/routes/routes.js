import config from '~/config';

import Community from '~/pages/Community';
import Top from '~/pages/Top';
import Genres from '~/pages/Genres';
import Home from '~/pages/Home';

const publicRoute = [
  { path: config.routes.home, component: Home },
  { path: config.routes.community, component: Community },
  { path: config.routes.genres, component: Genres },
  { path: config.routes.top, component: Top },
];

export { publicRoute };
