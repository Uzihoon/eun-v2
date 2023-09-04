import { Helmet } from 'react-helmet-async';
import Report from '~app/components/Report';
import { REPORT } from '~env/constants';
import { t } from '~i18n';
import { getTitle } from '../utilities';

const ReportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{getTitle(t.get(REPORT.TITLE_ID))}</title>
      </Helmet>
      <Report />
    </>
  );
};

export default ReportPage;
