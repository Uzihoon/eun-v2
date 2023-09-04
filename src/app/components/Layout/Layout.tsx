import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';

const Layout: React.FC = () => {
  return (
    <div className="container">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
