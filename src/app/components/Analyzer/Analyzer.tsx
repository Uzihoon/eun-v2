import Header from '~app/components/Header';
import { ANALYZER } from '~env/constants';
import { t } from '~i18n';
import Paper from '../Paper';
import AnalyzerForm from './Analyzer.form';

const Analyzer: React.FC = () => {
  return (
    <div>
      <Header title={t.get(ANALYZER.TITLE_ID)} desc={t.get(ANALYZER.DESC_ID)} />
      <Paper>
        <AnalyzerForm />
      </Paper>
    </div>
  );
};

export default Analyzer;
