import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import OnlyHeader from './layouts/OnlyHeader';
import GlobalStyles from '~/components/GlobalStyles';
import { publicRoute } from './routes';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) => {
            let Layout = OnlyHeader;
            let Page = route.component;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <GlobalStyles>
                      <Page />
                    </GlobalStyles>
                  </Layout>
                }
              />
            );
          })}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
