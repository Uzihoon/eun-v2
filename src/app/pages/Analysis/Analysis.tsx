import { Helmet } from 'react-helmet-async';

import Analysis from '~app/components/Analysis';
import { ANALYSIS } from '~env/constants';

import { getTitle } from '../utilities';

const AnalysisPage: React.FC = () => {
  console.log('?');
  return (
    <>
      <Helmet>
        <title>{getTitle(ANALYSIS.TITLE_ID)}</title>
      </Helmet>
      <Analysis />
    </>
  );
};

export default AnalysisPage;
