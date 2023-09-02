import config from '~/config';

import Community from '~/pages/Community';
import Top from '~/pages/Top';
import Genres from '~/pages/Genres';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

const publicRoute = [
  { path: config.routes.home, component: Home },
  { path: config.routes.community, component: Community },
  { path: config.routes.genres, component: Genres },
  { path: config.routes.top, component: Top },
  { path: config.routes.login, component: Login },
  { path: config.routes.register, component: Register },
];

export { publicRoute };
