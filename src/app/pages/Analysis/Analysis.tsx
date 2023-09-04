import { Helmet } from 'react-helmet-async';
import Analysis from '~components/Analysis';
import { title } from '~routes/analysis';
import { getTitle } from '../utilities';

const AnalysisPage: React.FC = () => (
  <>
    <Helmet>
      <title>{getTitle(title)}</title>
    </Helmet>
    <Analysis />
  </>
);

export default AnalysisPage;
