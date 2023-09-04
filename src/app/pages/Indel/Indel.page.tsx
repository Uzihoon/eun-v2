import { Helmet } from 'react-helmet-async';
import Indel from '~app/components/Indel';
import { INDEL } from '~env/constants';
import { t } from '~i18n';
import { getTitle } from '../utilities';

const IndelPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{getTitle(t.get(INDEL.TITLE_ID))}</title>
      </Helmet>
      <Indel />
    </>
  );
};

export default IndelPage;
