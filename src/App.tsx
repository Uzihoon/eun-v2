import { Routes, Route, BrowserRouter } from 'react-router-dom';
import routes from '~app/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, pageId, element: Element }) => (
          <Route path={path} key={pageId} element={<Element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
