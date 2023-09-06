import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import { Container } from './Layout.style';

const Layout: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
};

export default Layout;
