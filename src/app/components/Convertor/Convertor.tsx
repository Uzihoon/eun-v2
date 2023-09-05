import { CONVERTOR } from '~env/constants';
import { t } from '~i18n';
import Header from '../Header';
import Paper from '../Paper';

const Convertor: React.FC = () => {
  return (
    <div>
      <Header title={t.get(CONVERTOR.TITLE_ID)} desc={t.get(CONVERTOR.DESC_ID)} />
      <Paper />
    </div>
  );
};

export default Convertor;
