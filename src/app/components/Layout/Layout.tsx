import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import { Container } from './Layout.style';

const Layout: React.FC = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
};

export default Layout;
