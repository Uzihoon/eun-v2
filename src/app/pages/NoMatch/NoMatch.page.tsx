import { Helmet } from 'react-helmet-async';
import { NOMATCH } from '~env/constants';
import { t } from '~i18n';
import { getTitle } from '../utilities';

const NoMatchPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{getTitle(t.get(NOMATCH.TITLE_ID))}</title>
      </Helmet>
      <div>No Match</div>
    </>
  );
};

export default NoMatchPage;
