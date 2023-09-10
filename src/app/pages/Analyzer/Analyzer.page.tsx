import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Analyzer from '~app/components/Analyzer';
import { ANALYZER } from '~env/constants';
import { t } from '~i18n';
import { getTitle } from '../utilities';

const AnalyzerPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
