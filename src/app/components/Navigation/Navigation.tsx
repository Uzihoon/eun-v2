import { Link } from 'react-router-dom';
import routes from '~app/routes';
import { t } from '~i18n';
import { Nav } from './Naviation.style';

const Navigation: React.FC = () => {
  return (
    <Nav className="soft-green-600">
      {routes.map(({ pageId, path, title }) => (
        <Link to={path} key={pageId}>
          <div className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
            {t.get(title)}
          </div>
        </Link>
      ))}
    </Nav>
  );
};

export default Navigation;
