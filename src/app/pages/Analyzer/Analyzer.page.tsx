import { Helmet } from 'react-helmet-async';
import Analyzer from '~app/components/Analyzer';
import { ANALYZER } from '~env/constants';
import { t } from '~i18n';
import { getTitle } from '../utilities';

const AnalyzerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{getTitle(t.get(ANALYZER.TITLE_ID))}</title>
      </Helmet>
      <Analyzer />
    </>
  );
};

export default AnalyzerPage;
