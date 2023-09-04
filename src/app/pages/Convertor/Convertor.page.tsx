import { Helmet } from 'react-helmet-async';
import Convertor from '~app/components/Convertor';
import { CONVERTOR } from '~env/constants';
import { t } from '~i18n';
import { getTitle } from '../utilities';

const ConvertorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{getTitle(t.get(CONVERTOR.TITLE_ID))}</title>
      </Helmet>
      <Convertor />
    </>
  );
};

export default ConvertorPage;
