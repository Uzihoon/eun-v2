import { useParams } from 'react-router-dom';
import { REPORT } from '~env/constants';
import { t } from '~i18n';
import Header from '../Header';
import ReportForm from './Report.form';
import ReportStatistic from './Report.statistic';

const Report: React.FC = () => {
  const { reportId } = useParams();
  console.log(reportId);
  return (
    <div>
      <Header title={t.get(REPORT.TITLE_ID)} />
      {reportId ? <ReportStatistic reportId={reportId} /> : <ReportForm />}
    </div>
  );
};

export default Report;
