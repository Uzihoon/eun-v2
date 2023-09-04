import { Link } from 'react-router-dom';
import routes from '~app/routes';
import Button from '~ui/Button';
import { t } from '~i18n';
import { Nav } from './Naviation.style';

const Navigation: React.FC = () => {
  return (
    <Nav className="soft-green-600">
      {routes.map(({ pageId, path, title }) => (
        <Link to={path} key={pageId}>
          <Button>{t.get(title)}</Button>
        </Link>
      ))}
    </Nav>
  );
};

export default Navigation;
