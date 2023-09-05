import { REPORT } from '~env/constants';
import { t } from '~i18n';
import Header from '../Header';
import Paper from '../Paper';

const Report: React.FC = () => {
  return (
    <div>
      <Header title={t.get(REPORT.TITLE_ID)} />
      <Paper />
    </div>
  );
};

export default Report;
