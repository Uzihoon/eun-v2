import { useParams } from 'react-router-dom';
import { REPORT } from '~env/constants';
import { t } from '~i18n';
import Header from '../Header';
import ReportForm from './Report.form';
import ReportStatistic from './Report.statistic';
import { ReportContainer } from './Report.style';

const Report: React.FC = () => {
  const { reportId } = useParams();
  return (
    <ReportContainer>
      <Header title={t.get(REPORT.TITLE_ID)} />
      {reportId ? <ReportStatistic reportId={reportId} /> : <ReportForm />}
    </ReportContainer>
  );
};

export default Report;
