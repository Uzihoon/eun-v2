import { Link, useLocation } from 'react-router-dom';
import routes from '~app/routes';
import Logo from '~app/components/Logo';
import Button from '~ui/Button';
import { t } from '~i18n';
import { Nav, NavContainer, Selected } from './Navigation.style';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <Logo />
      <Nav>
        {routes
          .filter((route) => route.isVisible)
          .map(({ pageId, path, title }) =>
            location.pathname === path ? (
              <Selected key={pageId}>{t.get(title)}</Selected>
            ) : (
              <Link to={path} key={pageId}>
                <Button>{t.get(title)}</Button>
              </Link>
            ),
          )}
      </Nav>
    </NavContainer>
  );
};

export default Navigation;
