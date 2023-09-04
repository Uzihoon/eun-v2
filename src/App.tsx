import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '~app/components/Layout';
import { NoMatchPage } from '~app/pages';
import routes from '~app/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ index, path, pageId, element: Element }) => (
            <Route index={index} path={path} key={pageId} element={<Element />} />
          ))}
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
