import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <Suspense>
      {
        <Router>
          <Routes>
            <>
            {console.log(routes)}
              {
                routes.map((route, index) => 
                  <Route
                    path={route.path}
                    element={route.component}
                  />
                )
              }
            </>
          </Routes>

        </Router>
      }

    </Suspense>
  );
}

export default App;
