import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "./routes";
import MainUserLayout from "./layouts/MainUserLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = MainUserLayout;

            if (route.layout) {
              Layout = route.layout;
            } 
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />  
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
