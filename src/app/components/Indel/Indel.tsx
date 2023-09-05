import { INDEL } from '~env/constants';
import { t } from '~i18n';
import Header from '../Header';
import Paper from '../Paper';

const Indel: React.FC = () => {
  return (
    <div>
      <Header title={t.get(INDEL.TITLE_ID)} />
      <Paper />
    </div>
  );
};

export default Indel;
